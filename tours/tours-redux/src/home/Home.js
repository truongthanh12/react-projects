import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div
        className="py-20"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Monitor your health vitals smartly anywhere you go.
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="assets/health.svg" alt="Monitoring" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="assets/report.svg" alt="Reporting" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/Linux or Windows OS.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="assets/sync.svg" alt="Syncing" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#667eea" }}>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Limited in Stock
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Get yourself the Smart Health Monitoring Wristwatch!
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
