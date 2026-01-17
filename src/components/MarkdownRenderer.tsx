interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const renderContent = () => {
    const sections = content.split("\n\n").filter((section) => section.trim());

    return sections.map((section, index) => {
      const trimmedSection = section.trim();

      // Handle headers
      if (trimmedSection.startsWith("# ")) {
        return (
          <h1
            key={index}
            className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0"
          >
            {trimmedSection.slice(2)}
          </h1>
        );
      }

      if (trimmedSection.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-8">
            {trimmedSection.slice(3)}
          </h2>
        );
      }

      if (trimmedSection.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-white mb-3 mt-6"
          >
            {trimmedSection.slice(4)}
          </h3>
        );
      }

      // Handle code blocks
      if (trimmedSection.startsWith("```")) {
        const lines = trimmedSection.split("\n");
        const language = lines[0].slice(3).trim();
        const code = lines.slice(1, -1).join("\n");

        return (
          <div key={index} className="my-6">
            <div className="bg-primary/90 border border-accent/20 rounded-lg overflow-hidden">
              {language && (
                <div className="bg-accent/10 px-4 py-2 text-accent text-sm font-mono border-b border-accent/20">
                  {language}
                </div>
              )}
              <pre className="p-4 overflow-x-auto">
                <code className="text-accent text-sm font-mono whitespace-pre">
                  {code}
                </code>
              </pre>
            </div>
          </div>
        );
      }

      // Handle lists
      if (trimmedSection.includes("\n- ")) {
        const items = trimmedSection
          .split("\n")
          .filter((line) => line.trim().startsWith("- "));
        return (
          <ul key={index} className="text-white/80 mb-6 ml-6 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="list-disc">
                {renderInlineContent(item.slice(2).trim())}
              </li>
            ))}
          </ul>
        );
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(trimmedSection)) {
        const items = trimmedSection
          .split("\n")
          .filter((line) => /^\d+\.\s/.test(line.trim()));
        return (
          <ol
            key={index}
            className="text-white/80 mb-6 ml-6 space-y-2 list-decimal"
          >
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {renderInlineContent(item.replace(/^\d+\.\s/, "").trim())}
              </li>
            ))}
          </ol>
        );
      }

      // Handle blockquotes
      if (trimmedSection.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="border-l-4 border-accent pl-4 italic text-white/70 mb-6 bg-accent/5 py-2"
          >
            {renderInlineContent(trimmedSection.slice(2))}
          </blockquote>
        );
      }

      // Handle regular paragraphs
      return (
        <p key={index} className="text-white/80 mb-6 leading-relaxed">
          {renderInlineContent(trimmedSection)}
        </p>
      );
    });
  };

  const renderInlineContent = (text: string) => {
    // Handle inline code
    const parts = text.split(/(`[^`]+`)/);

    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="bg-accent/20 text-accent px-2 py-1 rounded text-sm font-mono"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      // Handle bold text
      const boldParts = part.split(/(\*\*[^*]+\*\*)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          return (
            <strong
              key={`${index}-${boldIndex}`}
              className="font-semibold text-white"
            >
              {boldPart.slice(2, -2)}
            </strong>
          );
        }

        // Handle italic text
        const italicParts = boldPart.split(/(\*[^*]+\*)/);
        return italicParts.map((italicPart, italicIndex) => {
          if (
            italicPart.startsWith("*") &&
            italicPart.endsWith("*") &&
            !italicPart.startsWith("**")
          ) {
            return (
              <em
                key={`${index}-${boldIndex}-${italicIndex}`}
                className="italic"
              >
                {italicPart.slice(1, -1)}
              </em>
            );
          }
          return italicPart;
        });
      });
    });
  };

  return <div className="markdown-content space-y-4">{renderContent()}</div>;
}
