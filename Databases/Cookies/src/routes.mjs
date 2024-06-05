import { Router } from "express";

const router = Router();

router.route('/').get((req, res) => {
    if (req.cookies.name && req.cookies.name === 'mujibai') {
        return res.send('welcome mujibai');
    }
    res.send('no cookie');
});

router.route('/setcookie').get((_, res) => {
    res.cookie('name', 'mujibai', { maxAge: 900000, httpOnly: true });
    res.status(201).send('cookie set');
});

router.route('/getcookie').get((req, res) => {
    console.log('without using cookie parser: ', req.headers.cookie);
    console.log(req.cookies);
    res.send(req.cookies);
});

export default router;

//cooke-parser hasn't been updated for 3 years and this has some issues:
// codemirror.next.json_document.js:1  Refused to load the font 'data:application/octet-stream;base64,d09GMgABAAAAAPUcABQAAAACTcwAAPSkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGpQ+G4GCAByMSj9IVkFSlR8/TVZBUoE+BmA/U1RBVIIiJ0gAhQwvgSQRCAqBgSjmQwuEHgAwhrRmATYCJAOIOAQgBYd0B4k4W+08ciQaIvPIC7OSzq4RzVwSsKn8n7dC5rabJIGNMXkENwC1rm5SwY69CDgPIJHu/wqz////c5MNGetA/wA25zQzLa3XaaY5DBaEw2FZauTUSkXzzDLPM0ug9wRjdiW752JIXymC5CNdOIitiw76Joq056xOkqzstNwz+mtA2+SB9UxMXqoItcnEGzVQayY8FXO9Tyw9uO8FGTB4ER6W4Q3v3fyl+4wP5XEsJBiOfpUSmNWLDw5eqJHaTfXj4crGdmgdPtb5J77K740osow36et4vdxehS+CwmEi/uW1oakfTCjDKTaFUdGJS3...RCYiRBUjjqpVdehwWShTwUSFiGkpwFW3Z2oGzmYJMeK0gwFELJ7PM/4UTEMiwQIkyv0zrt1+WANu2OO4EmDFWoORKoV+crX/qayXz31DjmP0Jhat1Qps3TCnCMbHe2dhx3LinKqm7arh/GaV7Wbf/g8Oj45PTs/OLy6vrm9u7+4fHp+cVpUN+Ym3GGIE2B+VRtlfQr6QI6A9EC/dOvupLOctxQQns5jZLK+KnujLbsNKU6WRaxpQEcLWJFxmDIujEnqcRJQDhxyboDVhInrU6Lu82xQq9aAi3hk77wwZMoc4SMxd3zbEVvi9BlEWtNwoQYmXmJY/tDia9mU2DtK3MydhzqVTJDjlZHACNuR1YrYnyMzFcEmMg7YbDaQEmuGdk5fN2alKY9dhjT44n67nuNceEY7zqGwwHeXyoHr0A4eWqfmxweApr3zqxQx5sHWbEultwddsQ7gWDpUOmv8Aac8LoRJi5v392WymSrIA9fVxzjXy7wQHo/ZuwCHBIO' because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.

// eq @ codemirror.next.json_document.js:1
// readSelectionRange @ codemirror.next.json_document.js:1
// Ro @ codemirror.next.json_document.js:1
// Vo @ codemirror.next.json_document.js:1
// (anonymous) @ json_document.js:1
// await in (anonymous) (async)
// g @ json_document.js:1
// (anonymous) @ json_document.js:1
// (anonymous) @ json_document.js:1
// (anonymous) @ json_document.js:1
// Show 9 more frames
// Show less

//         [NEW] Explain Console errors by using Copilot in Edge: click 
//          to explain an error. 
//         Learn more
//         Don't show again
// quillbot-content.js:795  [Deprecation] -ms-high-constrast is in the process of being deprecated. Please see https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/ for tips on updating to the new Forced Colors Mode standard.