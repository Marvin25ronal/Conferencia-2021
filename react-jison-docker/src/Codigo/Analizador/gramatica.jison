%{
    var cadena="";
    var tam=0;
%}
/*Gramatica*/
%lex
%options case-insensitive

%x INITIAL
%s string

//TOKENS

VAR "var"
/*IF "if"
FOR "for"
ELSE "else"
RETURN "return"
DOUBLE "double"
INTEGER "int"
BOOLEAN "boolean"*/
FALSE "false"
TRUE "true"
PRINT "print"
COMILLA "\""
BARRA_COMILLA "\\\""
DOBLE_BARRA "\\\\"
BARRA_ENE "\\n"
BARRA_ERRE "\\r"
BARRA_T "\\t"
BARRA_0 "\\0"
SPACE (\s \t\f\t)
ENTER (\r|\n|\r\n)

DECIMAL [0-9]+("."[0-9]+)\b
ENTERO [0-9]+\b

//sIGNOS
MAS "+"
MENOS "-"
POR "*"
DIV "/"
/*LLAV_A "{"
LLAV_C "}"*/
PAR_A "("
PAR_C ")"
//IGUAL "="
MAYOR ">"
MENOR "<"
IGUAL_IGUAL "=="
NOT "!"
AND "&&"
OR  "||"
DOSPUNTOS_IGUAL ":="
ID [A-Za-z_][_0-9A-Za-z]*


%%
<INITIAL>\s+                    %{/*espacios*/%}
<INITIAL>{COMILLA}              %{cadena="";this.begin("string");%}
/*<INITIAL>{VAR}                  %{return "VAR";%}
<INITIAL>{IF}                   %{return "IF";%}
<INITIAL>{FOR}                  %{return "FOR";%}
<INITIAL>{ELSE}                 %{return "ELSE";%}
<INITIAL>{RETURN}               %{return "RETURN";%}
<INITIAL>{DOUBLE}               %{return "DOUBLE";%}
<INITIAL>{INTEGER}              %{return "INTEGER";%}*/

<INITIAL>{VAR}                  %{return "VAR";%}
<INITIAL>{FALSE}                %{return "FALSE";%}
<INITIAL>{TRUE}                 %{return "TRUE";%}
<INITIAL>{PRINT}                %{return "PRINT";%}

<INITIAL>{MAS}                  %{return "MAS";%}
<INITIAL>{MENOS}                %{return "MENOS";%}
<INITIAL>{POR}                  %{return "POR";%}
<INITIAL>{DIV}                  %{return "DIV";%}
<INITIAL>{PAR_A}                %{return "PAR_A";%}
<INITIAL>{PAR_C}                %{return "PAR_C";%}
<INITIAL>{MAYOR}                %{return "MAYOR";%}
<INITIAL>{MENOR}                %{return "MENOR";%}
<INITIAL>{IGUAL_IGUAL}          %{return "IGUAL_IGUAL";%}
<INITIAL>{NOT}                  %{return "NOT";%}
<INITIAL>{AND}                  %{return "AND";%}
<INITIAL>{OR}                   %{return "OR";%}
<INITIAL>{DOSPUNTOS_IGUAL}      %{return "DOSPUNTOS_IGUAL";%}

<INITIAL>{DECIMAL}              %{return "DECIMAL";%}
<INITIAL>{ENTERO}               %{return "ENTERO";%}
<INITIAL>{ID}                   %{return "ID";%}
<INITIAL>{SPACE}                %{/*espacios*/%}
<INITIAL>{ENTER}                %{/*espacios*/%}

<string>{COMILLA}               %{this.begin("INITIAL");yytext=cadena;return "STRING";%}
<string>{BARRA_COMILLA}         %{cadena+="\"";%}
<string>{BARRA_COMILLA}         %{cadena+="\"";%}
<string>{DOBLE_BARRA}           %{cadena+="\\";%}
<string>{BARRA_ENE}             %{cadena+="\n";%}
<string>{BARRA_ERRE}            %{cadena+="\r";%}
<string>{BARRA_T}               %{cadena+="\t";%}
<string>\s+                     %{cadena+=" ";%}
<string>.                       %{cadena+=yytext;%}
<string>{ENTER}                 %{this.begin("INITIAL");/*String sin finalizar reportar error*/%}
<string><<EOF>>                 %{this.begin("INITIAL");/*String sin finalizar*/%}
<<EOF>>                         %{return "EOF";%}
.                               %{/*  */%}
/lex

%{
    const AST=require('../AST/AST.js').AST
    const TIPOEXP=require('../Expresion/TipoExp.js').TipoExp
    const TIPO=require('../Expresion/TipoExp.js').Tipo
    const LITERAL=require('../Expresion/Literal.js').Literal
    const PRINT=require('../Instruccion/Print.js').Print
%}

%right 'IGUAL'
%left 'MAS_MAS'  'MENOS_MENOS'
%left 'XOR'
%left 'OR'
%left 'AND'
%left 'IGUAL_IGUAL' 'DISTINTO' 'TRIPLE_IGUAL'
%nonassoc 'MENOR' 'MENOR_IGUAL' 'MAYOR' 'MAYOR_IGUAL'
%left 'MAS' 'MENOS'
%left 'POR' 'DIV' 'MODULO'
%left 'POTENCIA'
%right 'NOT'
%right UMENOS
%left 'COR_A' 'COR_C' 
%left 'PAR_A' 'PAR_C'

%start INICIAL
%%
INICIAL
    : CUERPO EOF {var arbol=new AST($1);return arbol;}
    |EOF {return null;}
    ;

CUERPO:
    CUERPO IMPRIMIR{$1.push($2);$$=$1}
    |IMPRIMIR{$$=[$1];}
   // | error PYCOMA
    ;
IMPRIMIR:
    PRINT PAR_A EXP PAR_C{$$=new PRINT($3,this._$.first_line,this._$.first_column+1)}
    ;

EXP:
    ENTERO {$$=new LITERAL(Number($1),new TIPOEXP(TIPO.INTEGER),this._$.first_line,this._$.first_column+1);}
    |DECIMAL
    |TRUE
    |FALSE
    |STRING{$$=new LITERAL($1,new TIPOEXP(TIPO.STRING),this._$.first_line,this._$.first_column+1);}
    ;