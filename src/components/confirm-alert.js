export function ConfirmAlert({text, onClose}) {

    return (
        <div className="backdrop" id="exampleModal" tabIndex="-1" onClick={onClose}>
            <div className="modal">
                <div className="modal-header">
                    <h5 className="" id="exampleModalLabel">
                        Modal title
                    </h5>
                    <button
                        type="button"
                        className=""
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="">
                    {text}
                </div>
                <div className="">
                    <button type="button" className="" onClick={onClose}>
                        Close
                    </button>
                    <button type="button" className="">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}

