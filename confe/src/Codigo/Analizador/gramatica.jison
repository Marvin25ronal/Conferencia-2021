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


IF "if"

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
LLAV_A "{"
LLAV_C "}"
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
PYCOMA ";"
ID [A-Za-z_][_0-9A-Za-z]*

print("Hola mundo")
%%
<INITIAL>\s+                    %{/*espacios*/%}
<INITIAL>{COMILLA}              %{cadena="";this.begin("string");%}
<INITIAL>{VAR}                  %{return "VAR";%}
<INITIAL>{IF}                   %{return "IF";%}
/*<INITIAL>{FOR}                  %{return "FOR";%}
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
<INITIAL>{LLAV_A}               %{return "LLAV_A";%}
<INITIAL>{LLAV_C}               %{return "LLAV_C";%}
<INITIAL>{MAYOR}                %{return "MAYOR";%}
<INITIAL>{MENOR}                %{return "MENOR";%}
<INITIAL>{IGUAL_IGUAL}          %{return "IGUAL_IGUAL";%}
<INITIAL>{NOT}                  %{return "NOT";%}
<INITIAL>{AND}                  %{return "AND";%}
<INITIAL>{OR}                   %{return "OR";%}
<INITIAL>{DOSPUNTOS_IGUAL}      %{return "DOSPUNTOS_IGUAL";%}
<INITIAL>{PYCOMA}               %{return "PYCOMA";%}

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
.                               %{var nuevo=new ERRORES(TIPOERRORES.LEXICO,"Caracter invalido: "+yytext,yylloc.first_line,yylloc.first_column+1);lista_errores.push(nuevo);%}
/lex

%{
    var lista_errores=[];
    const AST=require('../AST/AST.js').AST
    const TIPOEXP=require('../Expresion/TipoExp.js').TipoExp
    const TIPO=require('../Expresion/TipoExp.js').Tipo
    const LITERAL=require('../Expresion/Literal.js').Literal
    const PRINT=require('../Instruccion/Print.js').Print
    const ERRORES=require('../Errores/Errores.js').Errores
    const TIPOERRORES=require('../Errores/Errores.js').TipoError
    const ARITMETICAS=require('../Operaciones/Aritmeticas.js').Aritmeticas
    const OPERADOR=require('../Operaciones/Operacion.js').Operador
    const IF=require('../Instruccion/IF.js').IF
    const DECLARACION=require('../Instruccion/Declaracion.js').Declaracion
    const IDENTIFICADOR=require('../Expresion/Identificador.js').Identificador
%}

%right 'IGUAL'
%left 'OR'
%left 'AND'
%left 'IGUAL_IGUAL' 'DISTINTO' 
%nonassoc 'MENOR' 'MAYOR'
%left 'MAS' 'MENOS'
%left 'POR' 'DIV' 

%right 'NOT'
%right UMENOS


%start INICIAL
%%
INICIAL: 
    CUERPO EOF {var arbol=new AST($1);var a={'errores':lista_errores,'arbol':arbol};lista_errores=[];return a;}
    |EOF {var a={'errores':lista_errores};lista_errores=[];return a;}
    ;

CUERPO:
    CUERPO IMPRIMIR PYCOMA{$1.push($2);$$=$1}
    |IMPRIMIR PYCOMA{$$=[$1];}
    |CUERPO CONTROL_IF{$1.push($2);$$=$1}
    |CONTROL_IF{$$=[$1]}
    |DECLARACION{$$=[$1]}
    |CUERPO DECLARACION{$1.push($2);$$=$1}
    | error PYCOMA{var nuevo=new ERRORES(TIPOERRORES.SINTACTICO,'Error con '+yytext,@1.first_line,@1.first_column+1);lista_errores.push(nuevo);$$=null}
    ;
DECLARACION:
    ID DOSPUNTOS_IGUAL EXP PYCOMA{$$=new DECLARACION($3,new IDENTIFICADOR($1,this._$.first_line,this._$.first_column+1),this._$.first_line,this._$.first_column+1)}
    ;
CONTROL_IF:
    IF PAR_A EXP PAR_C AMBITO{$$=new IF($3,$5,this._$.first_line,this._$.first_column+1)}
    ;
AMBITO:
    LLAV_A CUERPO LLAV_C{$$=$2}
    |LLAV_A LLAV_C{$$=[]}
    ;
IMPRIMIR:
    PRINT PAR_A EXP PAR_C{$$=new PRINT($3,this._$.first_line,this._$.first_column+1)}
    ;

EXP:
    EXP MAS EXP{$$=new ARITMETICAS($1,$3,OPERADOR.SUMA,this._$.first_line,this._$.first_column+1);}
    |EXP MENOS EXP{$$=new ARITMETICAS($1,$3,OPERADOR.RESTA,this._$.first_line,this._$.first_column+1);}
    |EXP POR EXP{$$=new ARITMETICAS($1,$3,OPERADOR.MULTIPLICACION,this._$.first_line,this._$.first_column+1);}
    |EXP DIV EXP{$$=new ARITMETICAS($1,$3,OPERADOR.DIVISION,this._$.first_line,this._$.first_column+1);}
    |ENTERO {$$=new LITERAL(Number($1),new TIPOEXP(TIPO.INTEGER),this._$.first_line,this._$.first_column+1);}
    |DECIMAL{$$=new LITERAL(Number($1),new TIPOEXP(TIPO.DOUBLE),$1.first_line,$1.first_column+1);}
    |TRUE{$$=new LITERAL(true,new TIPOEXP(TIPO.BOOLEAN),$1.first_line,$1.first_column+1);}
    |FALSE{$$=new LITERAL(false,new TIPOEXP(TIPO.BOOLEAN),$1.first_line,$1.first_column+1);}
    |STRING{$$=new LITERAL($1,new TIPOEXP(TIPO.STRING),this._$.first_line,this._$.first_column+1);}
    |ID{$$=new IDENTIFICADOR($1,this._$.first_line,this._$.first_column+1)}
    ;