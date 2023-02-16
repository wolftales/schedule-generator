import something from 'somewhere';

class ImageDiff extends HMTLElement {
    constructor() {
        super();
        const styleElem = document.createElement('style');
        styleElem.innerHTML = styles;
        document.head.appendChild(styleElem);
        // the hello world program
        const header = something.getElementById('Hello World');
        console.log(header);
    }
}