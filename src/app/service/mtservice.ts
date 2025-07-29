import { Injectable } from '@angular/core';
import { movies } from './moviemodel';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mtservice {
  movielist:movies[]=[
   
    {
      movieid:'1',
  movieimage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPAQigFcssBJaq24TnvsQbwgnVywJ-mLWev97pMYKSjxGXwMou8vDNK_gvdWRI15UyOEZ02A',
  moviename: 'Pushpa 2: The Rule',
  moviecast: 'Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Jagadeesh Prathap Bandari, Sunil, Rao Ramesh',
  movieprice: 400,
  movietype: 'Action/Thriller/Drama',
  moviedata: 'Pushpa Raj’s journey continues as he consolidates power in the red sandalwood smuggling empire, facing off against IPS officer Bhanwar Singh Shekhawat and asserting his rule amidst war and betrayal.',
  moviecrew: 'Director: Sukumar; Written & Dialogues: Sukumar, Srikanth Vissa; Producer: Naveen Yerneni, Ravi Shankar; Music: Devi Sri Prasad'
},
{
  movieid:'2',
  movieimage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQISbXkAmyCYg2zNtFpPagPs5N2maYWJtULCyfmbJXRMBbUr4iamXGDqC4_8xgHRDrpubctJw',
  moviename: 'Devara: Part 1',
  moviecast: 'N. T. Rama Rao Jr., Janhvi Kapoor, Saif Ali Khan, Prakash Raj, Srikanth, Shine Tom Chacko, Kalaiyarasan , Murali Sharma etc.',
  movieprice: 300,
  movietype: 'Drama/Action/Thriller',
  moviedata: 'In a coastal village, tribal chieftain Devara engages in a violent feud with Bhaira over arms smuggling. After Devara’s demise, his son Vara rises to continue his legacy, facing internal and external threats in a tale of power, vengeance, and redemption.',
  moviecrew: 'Director: Koratala Siva; Writer: Koratala Siva; Producer: Sudhakar Mikkilineni, Kosaraju Harikrishna; Music: Anirudh Ravichander; Cinematography: R. Ratnavelu; Editing: A. Sreekar Prasad'
},
{
  movieid:'3',
  movieimage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQK4w8VeicgbIzOY11r2HE8fk0qtpCBmRyXsVQRr8fNuZxT8LsUa9AT7EdJBQaZTKv2lkEynQ',
  moviename: 'Kalki 2898 AD',
  moviecast: 'Prabhas, Deepika Padukone, Amitabh Bachchan, Kamal Haasan, Disha Patani',
  movieprice: 300,
  movietype: 'Sci‑Fi/Action/Mythological',
  moviedata: 'In a dystopian future (2898 AD), a team protects SUM‑80’s unborn child—believed to be the prophesied Kalki avatar—against powerful evil forces that threaten humanity\'s survival.',
  moviecrew: 'Director: Nag Ashwin; Music: Santhosh Narayanan; Producer: C. Aswani Dutt'
},
{
  movieid:'4',
  movieimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQX0_zh6eFqpx0r8Uf3NOTrmunLMl9nAoZSb1rQn2SDS47g-W8GnhxhB3pcqzlUkDLMq7J',
  moviename: 'Mr. Bachchan',
  moviecast: 'Ravi Teja , Bhagyashri Borse, Jagapathi Babu, Sachin Khedekar, Satya, Tanikella Bharani, Subhalekha Sudhakar',
  movieprice: 200,
  movietype: 'Action/Romance/Thriller',
  moviedata: 'An honest Income Tax officer Anand—nicknamed “Mr. Bachchan”—falls in love and is reinstated to lead a high-profile tax raid against a corrupt MP, leading to mass drama, romance, and intense raids.',
  moviecrew: 'Director & Writer: Harish Shankar; Scree  nplay: Satish Vegesna, Ramesh Reddy, Praveen Varma, Dattatreya, Tanvi Kesari; Story: Ritesh Shah; Producer: T. G. Vishwa Prasad, Vivek Kuchibotla, Bhushan Kumar, Krishan Kumar, Abhishek Pathak; Music: Mickey J. Meyer; Cinematography: Ayananka Bose; Editing: Ujwal Kulkarni'
},
{
  movieid:'5',
  movieimage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTreZFs7KRpzIj_3FXiT7nYj7tVtx1BHLvtWwXKlcUx92X6nnJtb02MI4-bjz2jC97DaLmVNQ',
  moviename: 'Hara Hara Veera Mallu',
  moviecast: 'Pawan Kalyan, Bobby Deol, Nidhhi Agerwal, Nargis Fakhri, Nora Fatehi, Sathyaraj, Adithya Menon, Dalip Tahil',
  movieprice: 5,
  movietype: 'HistoricalAction/Drama',
  moviedata: 'Set in the 17th-century Mughal Empire, a legendary rebel Veera Mallu is tasked with retrieving the Koh‑i‑Noor diamond to free a city under oppressive rule. Blending action, myth, and alternate history, the film portrays his transformation into a folk hero fighting tyranny. It features high‑stakes battles, a love subplot with Panchami, and a daring confrontation with Aurangzeb.',
  moviecrew: 'Directors: Krish Jagarlamudi & A. M. Jyothi Krishna; Screenplay & Story: Jagarlamudi & Sai Madhav Burra; Music: M. M. Keeravaani; Producer: A. Dayakar Rao (Mega Surya Productions); Cinematography: G. Shekar V.S. & Manoj Paramahamsa; Editing: Praveen K.L.'
},
{
  movieid:'6',
  movieimage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRW90uURfELwlTK1sKjD8Gija_LKvC-NsBrRdlQEu7oyLTE7oSqXEYcekAUTB7zckSM6w9b',
  moviename: 'Guntur Kaaram',
  moviecast: 'Mahesh Babu , Sreeleela, Meenakshi Chaudhary, Prakash Raj, Ramya Krishna, Jayaram, Jagapathi Babu, Rao Ramesh, Sunil',
  movieprice: 350,
  movietype: 'Masala/Action/Family',
  moviedata: 'Guntur Ramana, a powerful don known as Guntur Karam, falls in love with a journalist while balancing familial grudges and underworld politics. As he navigates love, power and generational pain tied to his estranged mother and domineering grandfather, he transforms into a protector of his city.',
  moviecrew: 'Director & Writer: Trivikram Srinivas; Producer: S. Radha Krishna (Haarika & Hassine Creations); Music: Thaman S; Cinematography: Manoj Paramahamsa; Editing: Naveen Nooli'
},
{
  movieid:'7',
  movieimage: 'https://m.media-amazon.com/images/M/MV5BYWRkNjA1ZDUtMGJmNC00ZGU0LWJkMDgtYmY5MDhiMWY4NTIxXkEyXkFqcGc@._V1_.jpg',
  moviename: 'Junior',
  moviecast: 'Kireeti Reddy, Sreeleela, Genelia, V. Ravichandran, Rao Ramesh, Sudharani, Achyut Kumar, Satya, Viva Harsha',
  movieprice: 200,
  movietype: 'Action/Drama/Romance',
  moviedata: 'Abhi, a pampered son raised by overprotective parents, seeks to reclaim the joys he missed. In college and later at an internship, he forms bonds with Spoorthi and clashes with his boss Vijaya, uncovering family secrets that reshape his lifeʼs path.',
  moviecrew: 'Director & Writer: Radha Krishna Reddy; Music: Devi Sri Prasad; Producer: Sai Korrapati; Cinematography: K. K. Senthil Kumar; Editing: Niranjan Devaramane; Dialogues: Kalyana Chakravarthy Tripuraneni; Studio: Vaaraahi Chalana Chitram'
},
{
  movieid:'8',
  movieimage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYsJBXkuugol7UDOKwzJ4kl2BA2YvuU1XGlH_9PHmTMAN2XMkwO1q-XrDhB5YHn3_CYVGCvg',
  moviename: 'Game Changer',
  moviecast: 'Ram Charan , Kiara Advani, S. J. Suryah, Anjali, Srikanth, Sunil, Jayaram, Samuthirakani',
  movieprice: 200,
  movietype: 'Thriller/Action/Drama',
  moviedata: 'An upright IAS officer, Ram Nandan (Ram Charan), battles political corruption led by the powerful Bobbili Mopidevi (S. J. Suryah). As he works to ensure fair elections and justice, he also uncovers generational conflicts and systemic rot. The story unfolds across a cat-and-mouse geopolitical arc with intense political chess.',
  moviecrew: 'Director: S. Shankar; Story: Karthik Subbaraj; Screenplay & Dialogues: S. Shankar, Vivek Velmurugan, Sai Madhav Burra; Producer: Dil Raju, Shirish; Music: Thaman S; Cinematography: Tirru; Editor: Shameer Muhammed & Ruben'
},

{
  movieid:'9',
  movieimage: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK1WZJzWfv3XRZcpZN5tFPrMBnbjY7W0F30Vjd_HNFk2xKjdLxB3KENmGhkWde9gdchQLBdw',
  moviename: 'HIT: The Third Case',
  moviecast: 'Nani, Srinidhi Shetty, Surya Srinivas, Adil Pala, Rao Ramesh, Brahmaji, Maganti Shinde',
  movieprice: 250,
  movietype: 'CrimeThriller/Action',
  moviedata: 'Arjun Sarkaar, a ruthless HIT officer from Visakhapatnam, is transferred to Jammu & Kashmir to crack a series of brutal serial killings. As he investigates, he uncovers a pattern termed "CTK" (Capture, Torture, Kill) and faces personal demons and a terrifying cult-like criminal network.',
  moviecrew: 'Director & Writer: Sailesh Kolanu; Producer: Nani, Prashanti Tipirneni; Music: Mickey J. Meyer; Cinematography: Sanu John Varghese; Editor: Karthika Srinivas R'
},
{
  "movieid": "10",
  "movieimage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuCqCoyIbHV0VaFjqmKrIVLNf1kCBQyvYD_FsGfOt4gn4hOhDPMCUYcfVXK4KcewLHSr5HA",
  "moviename": "Daaku Maharaaj",
  "moviecast": "Nandamuri Balakrishna, Bobby Deol, Pragya Jaiswal, Shraddha Srinath, Urvashi Rautela, Sachin Khedekar",
  "movieprice": 250,
  "movietype": "Period/Action/Drama",
  "moviedata": "When Sitaram, a civil engineer in a troubled region, transforms into the dacoit legend 'Daaku Maharaaj' to rescue a village, he later assumes the guise of driver Nanaji to protect a young girl from danger—an intense saga of sacrifice and justice.",
  "moviecrew": "Director: Bobby Kolli; Story & Screenplay: Bobby Kolli, K. Chakravarthy Reddy;"
}

  ]



  getmovies(){
    return of(this.movielist)
  }

   addmovies(proobj:movies){
 
  this.movielist.push(proobj);
  return "product added successfully"
}

deletemovies(pid:any){
    const index=this.movielist.findIndex((e)=>e.movieid==pid);
    if(index!=-1){
      this.movielist.splice(index,1);
      return "deleted"
    }
    else{
      return "check once"
    }
}
updatemovies(obj:any){
  const index=this.movielist.findIndex((e)=>e.movieid==obj.movieid)
  this.movielist.splice(index,1,obj)
}

  getmoviebyid(pid:any){
    return this.movielist.find(e=>e.movieid==pid);
  }

}
