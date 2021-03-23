import { Entorno } from "../Entorno/Entorno";
import { Expresion } from "../Expresion/Expresion";
import { Literal } from "../Expresion/Literal";
import { TipoExp, Tipo } from "../Expresion/TipoExp";
import { Operacion, Operador } from "./Operacion";

export class Aritmeticas extends Operacion {
  public max(a: TipoExp | null, b: TipoExp | null): TipoExp | null {
    return this.tipoDominante(a, b);
  }

  Nlinea: Number;
  Ncolumna: Number;
  constructor(
    op1: Expresion,
    op2: Expresion,
    op: Operador,
    linea: Number,
    columna: Number
  ) {
    super(op1, op2, op);
    this.Nlinea = linea;
    this.Ncolumna = columna;
  }
  private tipoDominante(t1: TipoExp | null, t2: TipoExp | null): TipoExp | null {
    if (t1 == null || t2 == null) {
      return null;
    }
    if (t1.isString() || t2.isString()) return new TipoExp(Tipo.STRING);
    else if (t1.isDouble() || t2.isDouble()) return new TipoExp(Tipo.DOUBLE);
    else if (t1.isInt() || t2.isInt()) return new TipoExp(Tipo.INTEGER);
    return null;
  }

  public getValor(e: Entorno): any {
    var r = this.val(e);
    //console.log(r)
    if (r instanceof Literal) {
      return (r as Literal).getValor(e);
    }
    return r;
  }
  private val(e: Entorno): any {
    if (this.op1 == null || this.op2 == null) {
      return null;
    }

    switch (this.op) {
      case Operador.SUMA:
        return this.Suma(this.op1, this.op2, this.Nlinea, this.Ncolumna, e);
      case Operador.DIVISION:
        return this.Division(this.op1, this.op2, this.Nlinea, this.Ncolumna, e);
      case Operador.MULTIPLICACION:
        return this.Multiplicacion(this.op1, this.op2, this.Nlinea, this.Ncolumna, e);
      case Operador.RESTA:
        return this.Resta(this.op1, this.op2, this.Nlinea, this.Ncolumna, e);
    }
    return null;
  }
  private Suma(op1: Expresion, op2: Expresion, linea: Number, columna: Number, e: Entorno): any {
    let valor1: any = op1.getValor(e);
    let valor2: any = op2.getValor(e);
    console.log(valor1)
    console.log(valor2)
    let tipo1: TipoExp | null = this.op1.getTipo(e);
    let tipo2: TipoExp | null = this.op2.getTipo(e);
    let tipores = this.max(tipo1, tipo2);
    let tipofinal: TipoExp;
    if (tipores != null) {
      tipofinal = tipores as TipoExp;
      switch (tipofinal.tipo) {
        case "STRING":
          return new Literal(valor1.toString() + valor2.toString(), new TipoExp(Tipo.STRING), this.Nlinea, this.Ncolumna);
        case Tipo.DOUBLE:
          return new Literal(Number(valor1) + Number(valor2), new TipoExp(Tipo.DOUBLE), this.Nlinea, this.Ncolumna)
        case Tipo.INTEGER:
          return new Literal(Number(valor1) + Number(valor2), new TipoExp(Tipo.INTEGER), this.Nlinea, this.Ncolumna)
      }
    }

    return null
  }
  private Division(op1: Expresion, op2: Expresion, linea: Number, columna: Number, e: Entorno): any {
    let valor1: any = op1.getValor(e);
    let valor2: any = op2.getValor(e);
    let tipo1: TipoExp | null = this.op1.getTipo(e);
    let tipo2: TipoExp | null = this.op2.getTipo(e);
    let tipores = this.max(tipo1, tipo2);
    let tipofinal: TipoExp;
    if (tipores != null) {
      tipofinal = tipores as TipoExp;
      switch (tipofinal.tipo) {
        case Tipo.DOUBLE:
          return new Literal(Number(valor1) / Number(valor2), new TipoExp(Tipo.DOUBLE), this.Nlinea, this.Ncolumna)
        case Tipo.INTEGER:
          return new Literal(Number(valor1) / Number(valor2), new TipoExp(Tipo.INTEGER), this.Nlinea, this.Ncolumna)
      }
    }
    return null
  }
  private Multiplicacion(op1: Expresion, op2: Expresion, linea: Number, columna: Number, e: Entorno): any {
    let valor1: any = op1.getValor(e);
    let valor2: any = op2.getValor(e);
    let tipo1: TipoExp | null = this.op1.getTipo(e);
    let tipo2: TipoExp | null = this.op2.getTipo(e);
    let tipores = this.max(tipo1, tipo2);
    let tipofinal: TipoExp;
    if (tipores != null) {
      tipofinal = tipores as TipoExp;
      switch (tipofinal.tipo) {
        case Tipo.DOUBLE:
          return new Literal(Number(valor1) * Number(valor2), new TipoExp(Tipo.DOUBLE), this.Nlinea, this.Ncolumna)
        case Tipo.INTEGER:
          return new Literal(Number(valor1) * Number(valor2), new TipoExp(Tipo.INTEGER), this.Nlinea, this.Ncolumna)
      }
    }
    return null
  }
  private Resta(op1: Expresion, op2: Expresion, linea: Number, columna: Number, e: Entorno): any {
    let valor1: any = op1.getValor(e);
    let valor2: any = op2.getValor(e);
    let tipo1: TipoExp | null = this.op1.getTipo(e);
    let tipo2: TipoExp | null = this.op2.getTipo(e);
    let tipores = this.max(tipo1, tipo2);
    let tipofinal: TipoExp;
    if (tipores != null) {
      tipofinal = tipores as TipoExp;
      switch (tipofinal.tipo) {
        case Tipo.DOUBLE:
          return new Literal(Number(valor1) - Number(valor2), new TipoExp(Tipo.DOUBLE), this.Nlinea, this.Ncolumna)
        case Tipo.INTEGER:
          return new Literal(Number(valor1) - Number(valor2), new TipoExp(Tipo.INTEGER), this.Nlinea, this.Ncolumna)
      }
    }
    return null
  }
  getTipo(e: Entorno): TipoExp | null {
    return this.tipoDominante(this.op1.getTipo(e), this.op2.getTipo(e))
  }
}
