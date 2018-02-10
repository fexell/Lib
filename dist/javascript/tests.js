{
    var test = {
        typeLive: function() {
            document.querySelector('.text-test').addEventListener('keyup', function(){
                console.log(this.value.replace(/\s/g, ''));
            }, false);
        }
    }
    
    test.typeLive();
}