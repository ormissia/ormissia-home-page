import Link from "next/link";
import "./page.css"

// https://codepen.io/rabakilgur/pen/RYpVQz
export default function BlogCard() {
    return (
        <div className="projcard projcard-blue">
            <Link href="/blog/123">
                <div className="projcard-innerbox">
                    <img className="projcard-img" src="https://picsum.photos/800/600?image=1041"/>
                    <div className="projcard-textbox">
                        <div className="projcard-title">Card Title</div>
                        <div className="projcard-subtitle">This explains the card in more detail</div>
                        <div className="projcard-bar"></div>
                        <div className="text-base projcard-description">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <div className="projcard-tagbox">
                            <span className="projcard-tag">HTML</span>
                            <span className="projcard-tag">CSS</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}