function number_format(num,dec,dec_point,thousands_sep){
    thousands_sep = thousands_sep == undefined ? "," : thousands_sep;
    dec_point = dec_point == undefined ? "." : dec_point;
    dec = dec == undefined ? 0 : dec;
    num = num - 1 + 1;
    //dec
    dec = dec < 0 ? 0 : dec;
    var strnum = Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec);
    var addZero = "";
    if( strnum.toString().indexOf('.') == -1 ){
        if(dec > 0){
            addZero += ".";
        }
        for(var i = 0; i<dec; i ++ ){
            addZero += "0";
        }
    }else{
        var decimal = strnum.toString().split('.')[1];
        console.log(strnum);
        for(var i = 0; i<dec-decimal.length; i ++ ){
            addZero += "0";
        } 
    }
    strnum = strnum.toString() + addZero;
    strnum = strnum.replace('.',dec_point);

    //thousands
    var integerSide = strnum.split(dec_point)[0];
    for(var i=3; i<integerSide.length; i+=3){
        var position = integerSide.length - i;
        var integerSide = [integerSide.slice(0, position), thousands_sep, integerSide.slice(position)].join('');
        i++;
    }

    return [integerSide,dec==0 ? '' : dec_point,strnum.split(dec_point)[1]].join('');

}
