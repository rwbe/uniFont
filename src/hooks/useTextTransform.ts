import { useMemo } from 'react';
import { glyphData, styleDefinitions, type StyleDefinition } from '../data/unicodeMap';

export function useTextTransform(inputText: string) {
  const normalizedText = useMemo(() => {
    let result = '';
    for (const char of inputText) {
      result += glyphData.reverseMap[char] || char;
    }
    return result;
  }, [inputText]);

  const charArray = useMemo(() => {
    const chars: string[] = [];
    for (const char of normalizedText) {
      chars.push(char);
    }
    return chars;
  }, [normalizedText]);

  const transformToStyle = (styleIndex: number): string => {
    const styleVariant = glyphData.styleVariants[styleIndex];
    if (!styleVariant) return normalizedText;

    return charArray
      .map(char => {
        const charIndex = glyphData.baseChars.indexOf(char);
        if (charIndex === -1) return char;
        return styleVariant[charIndex] || char;
      })
      .join('');
  };

  const allTransformations = useMemo(() => {
    return styleDefinitions.map(style => ({
      style,
      transformed: transformToStyle(style.index),
    }));
  }, [charArray]);

  return {
    normalizedText,
    transformToStyle,
    allTransformations,
    hasInput: normalizedText.length > 0,
  };
}

export type { StyleDefinition };
