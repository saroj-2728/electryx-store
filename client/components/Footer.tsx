const Footer = () => {
    return (
        <div className="z-20 bg-card-light dark:bg-card-dark text-txt-sec-light dark:text-txt-sec-dark border-t border-t-brd-light dark:border-t-brd-dark  text-center py-5">
            <p>&copy; {new Date().getFullYear()} Electryx Store. All rights reserved.</p>
        </div>
    )
}

export default Footer