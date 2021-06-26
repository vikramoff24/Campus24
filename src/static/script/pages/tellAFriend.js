const tellAFriendScript = () => {
    const linkInput = document.getElementById("linkInput")
    const copyPrompt = document.getElementById("link-copied-prompt")

    linkInput.type = "text"

    linkInput.select()
    linkInput.setSelectionRange(0, 1000)

    document.execCommand("copy")

    linkInput.type = "hidden"

    copyPrompt.style.display = "inline-block"
    setTimeout(() => {
        copyPrompt.style.display = "none"
    }, 2000)
}

export default tellAFriendScript