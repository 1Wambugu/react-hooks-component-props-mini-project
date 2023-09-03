import React from 'react';

function Article({ title, date, preview, readingTime }) {
  // Default date value if no date prop is provided
  const defaultDate = "January 1, 1970";

  // Function to calculate the number of emojis based on reading time
  const calculateEmojis = (minutes, emoji) => {
    const emojiCount = Math.ceil(minutes / (emoji === "☕️" ? 5 : 10));
    return emoji.repeat(emojiCount);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      <p>
        {readingTime <= 30 ? calculateEmojis(readingTime, "☕️") : calculateEmojis(readingTime, "🍱")}
        {` ${readingTime} min read`}
      </p>
    </article>
  );
}

export default Article;

