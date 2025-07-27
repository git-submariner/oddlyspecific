import { QuartzComponentConstructor } from "./types"
import style from "./styles/linksHeader.scss"
interface Options {
  links: Record<string, string>
}

export default (() => {
  function LinksHeader() {
    return (
      <div id="sticky">
        <hr style="margin: .2em; margin-top:0em; margin-bottom: 0em;"></hr>
        <div id="sticky-header">
          <span>
            <a href="https://www.instagram.com/shortlyspecific/">Instagram</a>
          </span>
          <span>
            <a href="https://www.tiktok.com/@shortlyspecific">TikTok</a>
          </span>
          <span>
            <a href="https://www.youtube.com/channel/UCxOZyiQyJWiCSUR9A_0qbbw">YouTube</a>
          </span>
          <span>
            <a href="/misc/Goals-for-the-oddlyspecific-knowledgebase.html">The knowledgebase</a>
          </span>
        </div>
        <hr style="margin: .2em; margin-top:0em; margin-bottom: 0em;"></hr>
      </div>
    )
  }

  LinksHeader.css = style
  return LinksHeader
}) satisfies QuartzComponentConstructor
