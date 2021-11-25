import "./contact.scss"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="right">
                <h2>Contact Me!</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
