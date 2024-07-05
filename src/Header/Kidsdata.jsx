import KidsCard from "./Kidslist/KidsCard";
const Kidsdata = () => {
  const Kidsdata = [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/t/2/y/7-8-years-fa-slevelessts-fasla-original-imag2qqekgq7bk4n-bb.jpeg?q=70",
      name: "Boys Printed Pure Cotton",
      start: "starts Form",
      price: " ₹299",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/kc29n680/kids-apparel-combo/7/6/9/12-18-months-7juvnewset-uniq-original-imaft9xfwtpyafzg.jpeg?q=70",
      name: "Boys & Girls Casual T-shirt",
      start: "starts Form",
      price: "₹399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-vest/k/m/a/5-6-years-bbv6-mega-style-original-imaghmg4bufqujg6.jpeg?q=70",
      name: "Vest For Baby Boys & Baby ",
      start: "starts Form",
      price: "₹199",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/l1tmf0w0/shirt/m/h/g/13-14-years-821-cloud-kids-original-imagdbyhtvgsxmgz.jpeg?q=70",
      name: "Boys Regular Fit shirt",
      start: "starts Form",
      price: "₹399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dungaree-romper/a/y/z/3-6-months-dng-skt-mytex-fashion-original-imagsgqfzpxdcrh4.jpeg?q=70",
      name: "Dungaree For Baby Girls Casual Printed Denim",
      start: "starts From",
      price: "₹299",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/ks0onm80/kids-lehenga-choli/l/5/u/5-6-years-4098-satyamfab-original-imag5znayyhkkc6p.jpeg?q=70",
      name: "Girls Lehenga Choli Ethnic Wear Embroidered Lehenga",
      start: "starts Form",
      price: "₹499",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/l45xea80/kids-dress/h/j/j/6-7-years-sku-532-red-stumble-fashion-original-imagf3tfy9nh2k5g.jpeg?q=70",
      name: "Girls Midi/Knee Length Festival",
      start: "starts Form",
      price: "₹299",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/s/0/i/7-8-years-mnplbscmb-mist-n-fogg-original-imagm7w3yefmbuxt.jpeg?q=70",
      name: "Boys Solid Polyester T Shirt",
      start: "starts Form",
      price: "₹439",
    },
  ];

  return (
    <div className="main-container">
      <KidsCard Kidsdata={Kidsdata} />
    </div>
  );
};
export default Kidsdata;
