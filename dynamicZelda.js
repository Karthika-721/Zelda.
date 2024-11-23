const { JSDOM } = require('jsdom');
 
describe('Test HTML Page for specific updates', () => {
    const html = `
        <html>
        <body>
            <p>Nintendo</p>
            <p>Princess Zelda</p>
            <p>evil Ganon</p>
        </body>
        </html>
    `;
    const dom = new JSDOM(html);
    const document = dom.window.document;
 
    // Default keywords for static tests
    const defaultKeywords = ["Nintendo", "Princess Zelda", "evil Ganon"];
 
    // Read dynamic keywords from environment variable
    const dynamicKeywords = process.env.KEYWORDS ? process.env.KEYWORDS.split(',') : [];
 
    // Combine default and dynamic keywords, ensuring no duplicates
    const keywordsToTest = dynamicKeywords.length > 0 ? dynamicKeywords : defaultKeywords;
 
    keywordsToTest.forEach((keyword) => {
        test(`contains the update related to "${keyword}"`, () => {
            const keywordExists = document.body.textContent.includes(keyword.trim());
            expect(keywordExists).toBe(true);
        });
    });
});