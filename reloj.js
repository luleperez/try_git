reloj = function ( Hora,Minutos,Segundos){
    this.Hora = Hora; 
    this.Minutos = Minutos; 
    this.Segundos = Segundos;
    this.alarm = "";
    
    this.time = function() {
       
        var newHora = this.Hora
       var newMinutos = this.Minutos
       var newSegundos = this.Segundos
           
        if (this.Hora < 10) {
            newHora = ( "0" + this.Hora)
        }else {
        newHora = this.Hora 
         }
        if (this.Minutos < 10){
        newMinutos = ("0" + this.Minutos);
            
            } else {
            newMinutos = this.Minutos
        }
    
        if (this.Segundos < 10){
        newSegundos = ("0" + this.Minutos);
        } else {
            newSegundos = this.Segundos
    }    
        
        
        
      
        return newHora + ":" + newMinutos + ":" + newSegundos;            
    }
        this.tick = function() {
        this.Segundos++;
       if(this.Segundos > 59) {
        this.Segundos = 0
         this.Minutos++;
 }
    if (this.Minutos > 59){
    this.Minutos = 0
    this.Hora++;
}

if(this.Hora > 23){
this.Hora = 0;
}
if(this.time() == this.alarm){
console.log(this.time() + "Alarma");
}
 }
     this.addAlarm = function(alarm){
     this.alarm = alarm;
}
}
     
    
var reloj = new reloj(22,59,59);
reloj.addAlarm ("23:00:00");
console.log(reloj.time()); 
reloj.tick();
console.log(reloj.time());
    