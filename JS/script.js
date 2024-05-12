window.addEventListener('scroll', function (e) {

    if (this.window.scrollY > 100) {
        document.querySelector('nav').classList.add('bg-white')
        document.querySelector("#one").classList.replace('d-flex', 'd-none');
        document.querySelector("#two").classList.replace('d-none', 'd-flex');
        this.document.querySelector('#test01').classList.replace('text-white',"text-black")
        this.document.querySelector('#test02').classList.replace('text-white',"text-black")
        this.document.querySelector('#test03').classList.replace('text-white',"text-black")
        this.document.querySelector('#test04').classList.replace('text-white',"text-black")
    } else {
        document.querySelector('nav').classList.remove('bg-white')
        document.querySelector("#one").classList.replace('d-none', 'd-flex');
        document.querySelector("#two").classList.replace('d-flex', 'd-none');
        this.document.querySelector('#test01').classList.replace("text-black" , 'text-white')
        this.document.querySelector('#test02').classList.replace("text-black" , 'text-white')
        this.document.querySelector('#test03').classList.replace("text-black" , 'text-white')
        this.document.querySelector('#test04').classList.replace("text-black" , 'text-white')
    }
})