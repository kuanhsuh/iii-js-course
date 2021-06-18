class HomePage {
  constructor() {
    this.posts;
    this.searchResults;
    this.postsElement = document.querySelector('#posts');
    this.searchPostInput = document.querySelector("#searchPost")
    this.searchResultUl = document.querySelector("#searchResult")
    this.events();
  }

  events() {
    this.fetchData()
    this.searchPostInput.addEventListener("keyup", () => this.displayDropdown())
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data.slice(0,10);
        this.displayPosts();
      })
  }

  displayPosts() {
    this.posts = this.posts.map(post => (
      `
      <div class="mb-6">
            <h2 class="font-bold font-medium text-4xl">${post.id}. ${post.title}</h2>
            <p class="text-2xl font-light text-gray-600 mb-5">${post.body}</p>
            <div class="mb-4 text-right"><a href="/show.html?post=${post.id}"
                    class="px-4 py-2 border inline-block rounded border-teal-600 text-teal-600">View This Post</a></div>
            <hr class="border-gray-400 border-t">
        </div>
      `
    ))
    this.postsElement.innerHTML = this.posts.join(" ");
  }

  displayDropdown() {
    if (this.searchPostInput.value.length > 0) {
      this.searchResultUl.classList.remove("hidden");
      this.fetchSearch(this.searchPostInput.value)
    } else {
      this.searchResultUl.classList.add("hidden");
    }
  }

  fetchSearch(searchText) {
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchText}`)
      .then(response => response.json())
      .then(data => {
        this.searchResults = data.slice(0, 5);
        this.appendSearchResult();
      })
  }

  appendSearchResult() {
    this.searchResults = this.searchResults.map((data) => (
      `<li class="p-2 border border-gray-200 hover:bg-gray-100">${data.title}</li>`
    ))
    this.searchResultUl.innerHTML = this.searchResults.join(" ");
  }
}

var homePage = new HomePage();
