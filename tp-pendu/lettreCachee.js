class LettreCachee   {
    constructor(show, hide) {
        this.show = show;
        this.hide = hide;
    }

    cachee(){
        $('p').css({ "display": "none"});
    }
}

let lettreCachee = new LettreCachee();
lettreCachee.cachee();