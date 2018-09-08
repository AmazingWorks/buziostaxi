/**
 * Created by IntelliJ IDEA.
 * User: Thiago Rodrigues
 * Date: 30/06/2010
 * Time: 06:22:38
 * To change this template use File | Settings | File Templates.
 */
var texto = {
        ini: function(args){
            args = jQuery.extend(this.args, args);
        },
        args: {
            objeto: "#conteudo",
            maior: "0.9",
            normal: "0.8",
            menor: "0.7",
            formato: "em"
        },
        aumentar: function(){
            $(this.args.objeto).css("font-size", this.args.maior + this.args.formato);
        },
        resetar: function(){
            $(this.args.objeto).css("font-size", this.args.normal + this.args.formato);
        },
        diminuir: function(){
            $(this.args.objeto).css("font-size", this.args.menor + this.args.formato);
        }
}