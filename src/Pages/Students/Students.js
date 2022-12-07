import "./Students.css";

const Students = () => {
  return (
    <>
      <div className="table">
        <div className="container text-center mt-5">
          <div className="title">
            <h3 className="mb-5">الطلاب الذين تشملهم العروض</h3>
          </div>
          <iframe
            frameborder="0"
            height="200"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT4MqfEPquN-QCLxnSR6nOO83i3qBMRjXmuH6hK8dINQ2WwmW46VGPDqob8WGl2IYzVoj1MXFzO49Gz/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Students;
