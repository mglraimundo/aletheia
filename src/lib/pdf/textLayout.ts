import type { PDFFont } from 'pdf-lib';

export interface LayoutResult {
  lines: string[];
  fontSize: number;
  fits: boolean;
}

/**
 * Wraps text to fit within maxWidth at the given fontSize.
 * If a single word is wider than maxWidth, hard-splits by character.
 */
export function wrapText(
  font: PDFFont,
  text: string,
  fontSize: number,
  maxWidth: number,
): string[] {
  const lines: string[] = [];

  for (const paragraph of text.split('\n')) {
    const words = paragraph.split(' ');
    let current = '';

    for (const word of words) {
      const candidate = current ? current + ' ' + word : word;
      const candidateWidth = font.widthOfTextAtSize(candidate, fontSize);

      if (candidateWidth <= maxWidth) {
        current = candidate;
      } else {
        // Flush current line
        if (current) lines.push(current);

        // Check if the word itself is too wide
        const wordWidth = font.widthOfTextAtSize(word, fontSize);
        if (wordWidth <= maxWidth) {
          current = word;
        } else {
          // Hard-split word by character
          let charBuf = '';
          for (const ch of word) {
            const test = charBuf + ch;
            if (font.widthOfTextAtSize(test, fontSize) <= maxWidth) {
              charBuf = test;
            } else {
              if (charBuf) lines.push(charBuf);
              charBuf = ch;
            }
          }
          current = charBuf;
        }
      }
    }

    if (current) lines.push(current);
  }

  return lines;
}

/**
 * Tries fontSizes from 10 down to 7, returning the largest that fits.
 * If even 7pt doesn't fit, returns 7pt with lines truncated to max capacity.
 */
export function layoutText(
  font: PDFFont,
  text: string,
  _x: number,
  _startY: number,
  width: number,
  height: number,
): LayoutResult {
  for (let fontSize = 10; fontSize >= 7; fontSize--) {
    const lineHeight = fontSize * 1.2;
    const maxLines = Math.floor(height / lineHeight);
    const lines = wrapText(font, text, fontSize, width);

    if (lines.length <= maxLines) {
      return { lines, fontSize, fits: true };
    }
  }

  // Fallback: 7pt truncated
  const fontSize = 7;
  const lineHeight = fontSize * 1.2;
  const maxLines = Math.floor(height / lineHeight);
  const lines = wrapText(font, text, fontSize, width).slice(0, maxLines);
  return { lines, fontSize, fits: false };
}

/**
 * Lays out a single line (never wraps). Scales font down if needed.
 */
export function layoutSingleLine(
  font: PDFFont,
  text: string,
  _x: number,
  _y: number,
  maxWidth: number,
): { text: string; fontSize: number } {
  for (let fontSize = 10; fontSize >= 7; fontSize--) {
    if (font.widthOfTextAtSize(text, fontSize) <= maxWidth) {
      return { text, fontSize };
    }
  }
  return { text, fontSize: 7 };
}
