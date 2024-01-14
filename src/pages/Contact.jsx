import "../css/Contact.css";
import TwoTitleEmbedded from "../components/TwoTitleEmbedded";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Contact = () => {
	return (
		<div id='contact' className='container'>
			<TwoTitleEmbedded
				firstTitleClass='text-light'
				secondTitleClass='text-p'
				spanLineClass='heading-separator-line'
				firstTitle='kapcsolat'
				secondTitle='Hogyan érhetsz el?'
			/>
			<div className='contact-wrapper'>
				<div className='contact-section'>
					<div className='contact-info'>
						<h3>Telefonszámom:</h3>
						<h4> +4072215451</h4>
					</div>
					<div className='contact-info'>
						<h3>E-mail cimem:</h3>
						<h4> viskyjulia@yahoo.com</h4>
					</div>

					<div className='contact-info social-href'>
						<p className='bigger-p'>Elérhető vagyok még a következő média platformokon keresztül is:</p>
						<a
							href='https://www.youtube.com/channel/UCtnAa5sBmRm5nru4IxrBqpg'
							target='_blank'
							rel='noopener noreferrer'
							className='social-href'
						>
							<AiFillYoutube />
						</a>

						<a
							href='https://www.facebook.com/julia.visky'
							target='_blank'
							rel='noopener noreferrer'
							className='social-href'
						>
							<AiFillFacebook />
						</a>
					</div>
				</div>
				<div className='legalStuff'>
					<p className='bigger-p'>
						<strong>Jogi nyilatkozat:</strong> A Belső Utazás nem hivatott diagnosztizálni, vagy gyógyítani semmilyen
						egészségügyi állapotot, vagy megbetegedést. Ilyen tekintetben tudományosan sem igazolták. Ennek megfelelően
						nem áll módunkban semmilyen ígéretet tenni, vagy garanciát vállalni a hatásáért, illetve kérjük, hogy
						szakképzett orvosának tanácsait mindig kövesse. Mindazonáltal azt bizton állíthatjuk, hogy növekszik a
						tudományos kutatások száma, melyek alátámasztják, hogy létezik a sejtszintű gyógyulás. Ezen túlmenően tudjuk
						azt is, hogy az elmúlt több, mint 20 évben több ezer ember használta a Belső Utazás módszerét, akik a saját
						elmondásuk szerint rendkívüli és tartós eredményeket értek el. Amennyiben Ön is szeretné felfedezni saját
						testének gyógyulási képességét és felszabadítani az Önben rejlő végtelen potenciált -úgy nincs kétségünk
						afelől, hogy Ön is a módszerünk lelkes hívévé válik majd.
					</p>
				</div>
			</div>
			<h3>Copyright © 2024 Visky Júlia hivatalos oldala</h3>
		</div>
	);
};

export default Contact;
