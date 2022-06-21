import Socialitem from "./socialitem";

function Social() {
    
    return (
        <ul>
            <Socialitem
                p = {{
                    media: "Facebook",
                    id: "facebook",
                    img: "https://picsum.photos/60",
                }}
            />
            <Socialitem
                p={{
                    media: "twitter",
                    id: "twitter",
                    img: "https://picsum.photos/61",
                }}
            />
            <Socialitem
                p={{
                    media: "Youtube",
                    id: "youtube",
                    img: "https://picsum.photos/62",
                }}
            />
        </ul>
    );
}

export default Social;
