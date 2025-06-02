import Hpheader from '@/components/hp-header';
export default function Home() {
  return (

  <div>
    <Hpheader />

    <main className="container">
          <div className="main-content">
            <p className="main-picture">Main concept art</p>
          </div>

        <div className="buttons">
          <button className="dowload-button text-white">
            DOWNLOAD GAME
          </button>
          <button className="learn-more-button text-white">
            LEARN MORE
          </button>
        </div>
      
    </main>
  </div>
  );


}
