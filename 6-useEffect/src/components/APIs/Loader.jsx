import LoaderCss from "./Loader.module.css";

function Loader() {
  return (
    <>
      <div className={LoaderCss.loaderContainer}>
        <div className={LoaderCss["lds-roller"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default Loader;
