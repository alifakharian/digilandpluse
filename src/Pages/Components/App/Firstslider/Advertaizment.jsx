import img1 from "../Images/Advertaizment/1.jpeg";
import img2 from "../Images/Advertaizment/2.jpeg";
export default function Advertaizment() {
  return (
    <div className="dark:bg-slate-900 gap-3 grid grid-cols-1 lg:grid-cols-2 py-5 px-5">
      <div>
        <img className="rounded-lg" src={img1} />
      </div>
      <div>
        <img className="rounded-lg" src={img2} />
      </div>
    </div>
  );
}
