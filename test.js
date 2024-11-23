const fs = require('fs');
const path = require('path');
 
// Read the HTML file
const htmlPath = path.join(__dirname, 'home.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
 
// Keywords to check
const keywords = ["Nintendo", "Princess Zelda", "evil Ganon"];
 
// Jest test case
describe('HTML Content Tests', () => {
    test('All keywords are present in index.html', () => {
        keywords.forEach(keyword => {
            expect(htmlContent.includes(keyword)).toBe(true);
        });
    });
});
 