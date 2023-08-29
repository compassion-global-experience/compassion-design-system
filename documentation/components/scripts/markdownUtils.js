
// markdownUtils.js
import marked from 'marked';

const getMarkdownSection = async (filePath, sectionTitle) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown file: ${response.status} ${response.statusText}`);
    }

    const content = await response.text();
    const tokens = marked.lexer(content);

    let inTargetSection = false;
    let sectionContent = '';

    for (const token of tokens) {
      if (token.type === 'heading' && token.text === sectionTitle) {
        inTargetSection = true;
      } else if (inTargetSection && token.type === 'heading' && token.depth <= 2) {
        break;
      } else if (inTargetSection) {
        sectionContent += marked.parser([token]);
      }
    }

    return sectionContent;
  } catch (error) {
    console.error('Error:', error);
    return ''; // Or you can handle the error in a way that makes sense for your application
  }
};

export { getMarkdownSection };

