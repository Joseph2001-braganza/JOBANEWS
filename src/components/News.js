import React, { Component } from 'react';
import Newsitem from './Newsitem';
export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Emily Walsh",
            "title": "Former Google CEO expresses concerns about Facebook's metaverse",
            "description": "Former Google CEO Eric Schmidt warns artificial intelligence will soon \"be everywhere\" and could have a significant impact on human relationships.",
            "url": "http://www.businessinsider.com/former-google-ceo-expresses-concerns-about-facebook-metaverse-2021-10",
            "urlToImage": "https://i.insider.com/617ea15a23745d0018245db2?width=1200&format=jpeg",
            "publishedAt": "2021-10-31T17:25:12Z",
            "content": "Former Google CEO Eric Schmidt is joining the sea of voices weighing in on Facebook's metaverse and expressing concern about the future of artificial intelligence technology. \r\nSchmidt, who served as… [+3248 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Wired",
            "title": "How to Recover Earlier Versions of Files: Google Docs, Microsoft Office, and More",
            "description": "Want to resurrect that paragraph from a few drafts ago, or dredge up the doc you accidentally deleted? Here are your options.",
            "url": "https://www.wired.com/story/how-to-recover-file-versions/",
            "urlToImage": "https://media.wired.com/photos/616082cf9b56a57b08a03687/191:100/w_1280,c_limit/Gear-Recover-Documents-1281427978.jpg",
            "publishedAt": "2021-10-31T12:00:00Z",
            "content": "That sinking feeling when you realize you saved over a version of a file you need or unwittingly lost some vital information in a recent document revision is all too familiar to many. In the past, yo… [+1372 chars]"
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": "Brian Rotter",
            "title": "Google nennt 113 Gründe, aufs Pixel umzusteigen",
            "description": "Google will seine Pixel-Modelle pushen. Dafür produzierte der Konzern ein Werbevideo, das auch den ein oder an",
            "url": "https://t3n.de/news/werbespot-pixel-google-1420635/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2021/10/pixel-6-6-pro-hands-on-5.jpg",
            "publishedAt": "2021-10-31T10:05:00Z",
            "content": "Google hat eine Reihe neuer Smartphones veröffentlicht, die noch diese Woche auf den Markt kommen sollen, allen voran das Pixel 6 und das Pixel 6 Pro. Für alle, die noch nicht sicher sind, ob sie sic… [+2587 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Scott Carpenter",
            "title": "Internet shutdowns are a political weapon. It's time to disarm.",
            "description": "Scott Carpenter Contributor Share on Twitter Scott Carpenter is Jigsaw’s Director of Policy and International Engagement. Prior to Google, Carpenter served as the Keston Family Fellow at the Washington Institute for Near East Policy and as the U.S. Deputy Ass…",
            "url": "https://techcrunch.com/2021/10/30/internet-shutdowns-are-a-political-weapon-its-time-to-disarm/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-93338723.jpg?w=534",
            "publishedAt": "2021-10-30T16:05:45Z",
            "content": "Authoritarian governments from twenty-one countries have deliberately shut down internet service at least fifty times this year, and the problem is only bound to get worse. As regimes such as Venezue… [+4888 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Honor 50 review: lose a Huawei, gain a Google",
            "description": "A great screen and battery life let down by a so-so camera.",
            "url": "https://www.theverge.com/22752483/honor-50-review-108-megapixel-quad-camera-120hz-oled-display",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/6CHp08vOOg5SfoxzbYvlEu0nI0Q=/0x220:2040x1288/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22963221/jporter_211025_4826_0002.jpg",
            "publishedAt": "2021-10-30T07:00:00Z",
            "content": "Its rare that you need to get into geopolitics at the outset of a smartphone review, but its impossible to avoid with the Honor 50. Its the first Honor-branded device to release outside of China sinc… [+8914 chars]"
        },
        {
            "source": {
                "id": "mashable",
                "name": "Mashable"
            },
            "author": "Karissa Bell",
            "title": "Amazon challenges Google with smaller, cheaper Echo Show",
            "description": "Amazon just ratcheted up the pressure on Google.",
            "url": "https://mashable.com/article/amazon-echo-show-5/",
            "urlToImage": "https://mondrian.mashable.com/2019%252F05%252F29%252F4d%252Fd91b4bcb383142c1b52ffbac16165110.01151.jpg%252F1200x630.jpg?signature=R9UT45RZefZ53JiuK0HJ5OQNCoU=",
            "publishedAt": "2019-05-29T13:00:00Z",
            "content": "Amazon just ratcheted up the pressure on Google in a major way.\r\nThe company just unveiled its new Echo Show 5, a smaller and cheaper version of its Echo Show speaker. The $89.99 device is available … [+2026 chars]"
        },
        {
            "source": {
                "id": "recode",
                "name": "Recode"
            },
            "author": "Chris Welch",
            "title": "Google Maps is adding a Where’s Waldo? mini-game for the next week",
            "description": "Inside of Google Maps on Android, iOS, and desktop, you’ll be able to search for Waldo and his friends from the classic children’s puzzle book.",
            "url": "https://www.theverge.com/2018/3/31/17183606/google-maps-wheres-waldo-game-april-fools-week",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/7URqcE9iFcFoKIlMPAsRXHciF0c=/163x0:1437x667/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10562757/E60A59F0-7E8D-412E-BB3C-AB0CE0121DD0.0.png",
            "publishedAt": "2018-03-31T16:00:04Z",
            "content": "Starting today and continuing on for the next week, Google is bringing Wheres Waldo? to Google Maps. On Android, iOS, and the desktop, youll see Waldo pop up in his signature red and white stripes an… [+1245 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: [],
            lading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b5990b16f5a843739c705eb9e1df1acc&page=1";
        await fetch(url).then((res) => res.json())
            .then((json) => {
                this.setState({
                    articles: json.articles,
                    loading: false
                });
            })
        // let parsedData = data.json()
        //console.log(parsedData);
        //this.setState({ articles: parsedData.articles });
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b5990b16f5a843739c705eb9e1df1acc&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b5990b16f5a843739c705eb9e1df1acc&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h2 className="text-danger">Top HeadLines:       "[-_-]"  </h2>
                <div className="row">
                    {this.state.articles.map((ele) => {
                        return <div className="col-md-4" key={ele.url}>
                            <Newsitem imageUrl={ele.urlToImage} title={ele.title} description={ele.description ? ele.description.slice(0, 88) : "lol click on Read More"} newsUrl={ele.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
