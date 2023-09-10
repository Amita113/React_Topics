import './home.css'
import trainer from './training1.jpg';
// Tell Webpack this JS file uses this image

function Home() {
  return (
    <div className="parent">
      <div className="child item1">
        <p>
          Twitter’s claim that Meta Platforms stole trade secrets to build its new microblogging site may be the first volley in a legal battle between the social media giants, but experts say Twitter would have to clear a high hurdle if it sues.

          In a letter sent on Wednesday, Twitter alleged that Meta used its trade secrets to develop its new social media platform, Threads, and demanded that it stop using the information.

        </p>
      </div>
      <div className="child item2">
        <img src={trainer} alt='hello' width={500} height={250} />
      </div>

      
    </div>

  );
}
export default Home;