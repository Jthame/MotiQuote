import React, { Component } from 'react';
import $ from "jquery";
import { Spring, transition, animated } from 'react-spring';


import './Styles/App.scss';           //Research how to properly connect to Sass and .scss files

class App extends Component {
  constructor() {
    super();
    this.state = {
      themes: ["purpleblue", "greenpurple", "orangepurple", "skybluepink", "purpleblue", "greenpurple", "orangepurple", "skybluepink", "purpleblue", "greenpurple"],
      display: 'purpleblue',
      quotes: [
        { text: "Don't say you can't when you havent tried. Just Do it - Don't say you can't when you havent tried. Just Do it", author: "- Nike" },
        { text: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its life believing it is stupid', author: '- Albert Einstein' },
        { text: 'Anyone who has never made a mistake has never tried anything new', author: '- Albert Einstein' },
        { text: 'It always seems impossible until it is done', author: '- Nelson Mandela' },
        { text: 'Because the people who are crazy enough to think they can change the world are the ones who do', author: '- Steve Jobs' },
        { text: "Don't say you can't when you havent tried. Just Do it - Don't say you can't when you havent tried. Just Do it", author: "- Nike" },
        { text: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its life believing it is stupid', author: '- Albert Einstein' },
        { text: 'Anyone who has never made a mistake has never tried anything new', author: '- Albert Einstein' },
        { text: 'It always seems impossible until it is done', author: '- Nelson Mandela' },
        { text: 'Because the people who are crazy enough to think they can change the world are the ones who do', author: '- Steve Jobs' }
      ],
      currentQuote: "Don't say you can't when you havent tried. Just Do it - Don't say you can't when you havent tried. Just Do it",
      currentAuthor: '- Nike',
      animation: "bg-fade 2s ease-in-out",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const index = Math.floor(Math.random() * 10);
    console.log(index);
    const quote = this.state.quotes[index].text;
    const author = this.state.quotes[index].author;
    const theme = this.state.themes[index];
    this.setState({
      display: theme,
      currentQuote: quote,
      currentAuthor: author,
    });
    $("#new-quote-pb").click(function () {
      $("container").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
      });

      // $("#container").animate({ 
      //   opacity: 1 }, 2000);
      // $("#container").animate({ 
      //   opacity: 1 }, 2000);
    });

    // $("container").animate({ opacity: 1 }, 2000);
    // $("text-bp").style.animation = "text-fade 1s ease-in-out";
    // $("text-gp").style.animation = "text-fade 1s ease-in-out";
    // $("text-sbp").css("animation", "text-fade 1s ease-in-out");
    // $("text-pb").css("animation", "text-fade 1s ease-in-out");
  }


  render() {
    return (
      this.state.display === "purpleblue" ?
        <div class="body-container container-pb" id="container" >
          <div class="overlay"> {/* If needed */}
            <div class="main-container">
              <div id="quote-box">
                <p id="text-pb">
                  <q>{this.state.currentQuote}</q>
                </p>
                <p id="author-pb">{this.state.currentAuthor}</p>
                <div class="options">
                  <a id="tweet-quote-pb" styles={`background: ${this.state.colors}`}> {/* Write code for dynamically rendering each display with the corresponding colours for each display*/}
                    <svg class="tweet-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <a id="share-quote-pb">
                    <svg class="share-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  </a>
                  <button id="new-quote-pb" onClick={this.handleSubmit}>New Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        this.state.display === "greenpurple" ?
          <div class="body-container container-gp">
            <div class="overlay"> {/* If needed */}
              <div class="main-container">
                <div id="quote-box">
                  <p id="text-gp">
                    <q>{this.state.currentQuote}</q>
                  </p>
                  <p id="author-gp">{this.state.currentAuthor}</p>
                  <div class="options">
                    <a id="tweet-quote-gp" styles={`background: ${this.state.colors}`}> {/* Write code for dynamically rendering each display with the corresponding colours for each display*/}
                      <svg class="tweet-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </a>
                    <a id="share-quote-gp">
                      <svg class="share-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                    </a>
                    <button id="new-quote-gp" onClick={this.handleSubmit}>New Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          :
          this.state.display === "orangepurple" ?
            <div class="body-container container-op" >
              <div class="overlay"> {/* If needed */}
                <div class="main-container">
                  <div id="quote-box">
                    <p id="text-op">
                      <q>{this.state.currentQuote}</q>
                    </p>
                    <p id="author-op">{this.state.currentAuthor}</p>
                    <div class="options">
                      <a id="tweet-quote-op" styles={`background: ${this.state.colors}`}> {/* Write code for dynamically rendering each display with the corresponding colours for each display*/}
                        <svg class="tweet-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                      </a>
                      <a id="share-quote-op">
                        <svg class="share-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                      </a>
                      <button id="new-quote-op" onClick={this.handleSubmit}>New Quote</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            this.state.display === "skybluepink" ?
              <div class="body-container container-sbp" >
                <div class="overlay"> {/* If needed */}
                  <div class="main-container">
                    <div id="quote-box">
                      <p id="text-sbp">
                        <q>{this.state.currentQuote}</q>
                      </p>
                      <p id="author-sbp">{this.state.currentAuthor}</p>
                      <div class="options">
                        <a id="tweet-quote-sbp" > {/* Write code for dynamically rendering each display with the corresponding colours for each display*/}
                          <svg class="tweet-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                        <a id="share-quote-sbp">
                          <svg class="share-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </a>
                        <button id="new-quote-sbp" onClick={this.handleSubmit}>New Quote</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div></div>

    );
  }
}

export default App;
