import { useState } from "react";
import "./styles.css";

const bookDB = {
  Romance: [
    {
      name: "Pride and Prejudice",
      author: "Jane Austen"
    },
    {
      name: "Jane Eyre",
      author: "Charlotte Brontë"
    },
    {
      name: "Twilight",
      author: "Stephenie Meyer"
    },
    {
      name: "The Notebook",
      author: "Nicholas Sparks"
    },
    {
      name: "Romeo and Juliet",
      author: "William Shakespeare"
    },
    {
      name: "The Time Traveler's Wife",
      author: "Audrey Niffenegger"
    },
    {
      name: "Gone with the Wind",
      author: "Margaret Mitchell"
    }
  ],

  Fiction: [
    {
      name: "1984",
      author: "George Orwell"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone ",
      author: "J.K. Rowling"
    },
    {
      name: "The Diary of a Young Girl",
      author: "Anne Frank"
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee"
    },
    {
      name: "The Little Prince",
      author: "Antoine de Saint-Exupéry"
    },
    {
      name: "Animal Farm",
      author: "George Orwell"
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho"
    }
  ],

  Biography: [
    {
      name: "Steve Jobs",
      author: "Walter Isaacson"
    },
    {
      name:
        "Unbroken: A World War II Story of Survival, Resilience and Redemption",
      author: "Laura Hillenbrand"
    },
    {
      name: "Einstein: His Life and Universe",
      author: "Walter Isaacson"
    },
    {
      name: "Into the Wild",
      author: "Jon Krakauer"
    },
    {
      name: "John Adams",
      author: "David McCullough"
    },
    {
      name: "Team of Rivals: The Political Genius of Abraham Lincoln",
      author: "Doris Kearns Goodwin"
    },
    {
      name: "Marie Antoinette: The Journey",
      author: "Antonia Fraser"
    }
  ],

  History: [
    {
      name: "The Rise and Fall of the Third Reich: A History of Nazi Germany",
      author: "William L. Shirer"
    },
    {
      name: "1776",
      author: "David McCullough"
    },
    {
      name: "Team of Rivals: The Political Genius of Abraham Lincoln",
      author: "Doris Kearns Goodwin"
    },
    {
      name: "The Guns of August",
      author: "Barbara W. Tuchman"
    },
    {
      name: "Guns, Germs, and Steel: The Fates of Human Societies",
      author: "Jared Diamond"
    },
    {
      name: "Hiroshima",
      author: "John Hersey"
    },
    {
      name: "John Adams",
      author: "David McCullough"
    }
  ]
};

export default function App() {
  const [bookRecommendation, setBookRecommendation] = useState("Romance");

  function clickHandler(book) {
    // When the button is clicked show that genres book recommendation
    setBookRecommendation(book);
  }

  return (
    <div className="App">
      <h1>Book Recommendation</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my recommendations for books.{" "}
      </p>

      {/* This div is for the book buttons */}

      <div>
        {Object.keys(bookDB).map((book) => (
          <button className="btn" onClick={() => clickHandler(book)}>
            {" "}
            {book}{" "}
          </button>
        ))}
      </div>

      {/* this div is to display the recommendation when the button is clicked */}

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[bookRecommendation].map((books) => (
            <li className="book" key={books.name}>
              <div style={{ fontSize: "larger" }}> {books.name} </div>
              <div style={{ fontSize: "smaller" }}> {books.author} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
