// Attach event listener to the button
document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = convertToMarkdown(inputText);
    document.getElementById('outputText').textContent = outputText; // Set the output text
});

// Function to convert plain text to Markdown
function convertToMarkdown(text) {
    let markdown = text;

    // Convert headings
    markdown = markdown.replace(/^###### (.*)/gm, '###### $1'); // H6
    markdown = markdown.replace(/^##### (.*)/gm, '##### $1');   // H5
    markdown = markdown.replace(/^#### (.*)/gm, '#### $1');     // H4
    markdown = markdown.replace(/^### (.*)/gm, '### $1');       // H3
    markdown = markdown.replace(/^## (.*)/gm, '## $1');         // H2
    markdown = markdown.replace(/^# (.*)/gm, '# $1');           // H1

    // Convert bold and italic
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '**$1**'); // Bold
    markdown = markdown.replace(/\*(.*?)\*/g, '*$1*');       // Italic

    // Convert lists
    markdown = markdown.replace(/^\s*[-*]\s+/gm, '* '); // Bullet points

    // Convert links
    markdown = markdown.replace(/(http[s]?:\/\/[^\s]+)/g, '[$1]($1)'); // URLs

    return markdown;
}
