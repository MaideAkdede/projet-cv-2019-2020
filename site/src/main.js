(function () {
    const OpenMenu = {
        init(){
            console.log('OpenMenu Init');
            this.pluss = document.querySelectorAll('.is-not-open');
            this.hiddenTexts = document.querySelectorAll('.hidden-container');
           this.headers = document.getElementsByClassName('section');
            for(let i = 0 ; i < this.headers.length ; i++){
                this.headers[i].addEventListener('click', (e)=>{
                    for(let plus of this.pluss){
                        plus.classList.toggle('is-open');
                    }
                    for(let hiddenText of this.hiddenTexts){
                        hiddenText.classList.toggle('text-to-hide');
                    }
                })
            }
        }
    }
    OpenMenu.init();
})();