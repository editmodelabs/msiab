# Marketing Site in a box


Marketing site in a box gives you everything you need to get a beautiful website or landing page, deployed to the internet, in less than 10 minutes.
And because it's [powered by Editmode](https://editmode.com), all of the content can be managed, updated and changed by you or anyone on your team - technical or otherwise.
Additionally, you get a real live codebase, running on Tailwind and Next.js, that you can modify and update as you please 🤗

## Contents
- [What's Included](#whats-included)
- [How It Works](#how-it-works)
- [Working with content](#working-with-content)
- [FAQ](#faq)

---
### What's Included

The goal of Marketing Site in a Box is to provide the two pillars of any marketing site - the **theme** and the **content** - together, in one place. 

- Beautiful homepage
- Fully content-managed
- Inline editing 🙀
- Content Sections
  - Features
  - About Us
  - Terms
  - Privacy Policy
  - Jobs
  - Testimonials
  - Team Members
  - Pricing

---
### How It Works

#### 1. 👇  Get an Editmode project id by cloning the Marketing Site Starter project. 

 &nbsp;&nbsp;&nbsp;&nbsp; [<img src="https://img.editmode.com/production/content_pieces/cnk_4282820621bc70b3d147/98CipzYMT2eD/images/original/getproject.png" width="170" />](https://app.editmode.com/projects/prj_Y5HfCBS4rqZg/clone)


#### 2. Choose a theme and hit the button to deploy it to Vercel

| <h3> Lagos </h3>             |  <h3>Manila</h3> | <h3>Dublin</h3>
:-------------------------:|:-------------------------:|:-------------------------:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Feditmodelabs%2Fmsiab%2Ftree%2Fmain%2Fthemes%2Flagos?&env=NEXT_PUBLIC_PROJECT_ID)  | Coming Soon | Coming Soon
[<img src="/themes/lagos/preview.png" width="350" />](https://msiab-sogal.vercel.app/) |  <img src="/themes/comingsoon.png" width="350" /> |  <img src="/themes/comingsoon.png" width="350" /> 

---

### Theme Gallery

- [The Lagos theme](https://github.com/editmodelabs/msiab/tree/main/themes/lagos)

--- 

## Working with content

The **Editmode Marketing Site Starter Project** contains all of the content that populates the theme. The content is stored in Editmode (as opposed to inside the files), so that anyone on your team - technical or non-technical, can access and change it at any time. Getting your own copy of the content is as simple as cloning the project in one click from [👉 here 👈](https://app.editmode.com/projects/prj_Y5HfCBS4rqZg/clone). 

Once you've cloned the project, you'll now have access to all of the chunks inside of it. Every chunk has an identifier that you can reference from your theme. 
- [Full List of Chunk Identifiers](https://api.editmode.com/chunks?project_id=prj_Y5HfCBS4rqZg&fields=content_key,content,chunk_type&chunk_type=atoms)
- [Full List of Collection Identifiers](https://api.editmode.com/chunks?project_id=prj_Y5HfCBS4rqZg&fields=content_key,content,chunk_type&chunk_type=atoms)


## Render a piece of Editmode content from Next.js

Rendering a piece of content from Editmode within your template is as simple as... 
```jsx
<Chunk identifier="logo_icon" className="w-5 text-primary" />
```

The above snippet will render the chunk with the `logo_icon` identifier, but you can replace it with whatever content you're trying to fetch.


## Rendering a collection
The `<Chunk />` syntax mentioned above is useful when referencing standalone pieces of content like the logo or section headings, but each theme will also contain _repeatable_ content - for example your team members section will have a collection of items which each have the same fields - name, profile image, and description. This content is stored in **_collections_**. We can fetch and loop through every item in an Editmode collection using the `<ChunkCollection />` component, as shown here.

```jsx
 <ChunkCollection identifier="navigation_items" tags={["top_nav"]}  className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto" itemClass="team_member">
          
  { (getChunk, chunk) => (
    <div className="flex items-center">
      <a className="text-sm text-gray-400 hover:text-gray-500 px-4" href={getChunk(chunk,"Url")}>
        {getChunk(chunk,"Title")}
      </a>
    </div>              
  )}

</ChunkCollection>
```


### FAQ

### Powered By

Marketing Site In A Box is a remix of some incredible work by some of our favourite teams

- [Editmode.com](https://editmode.com) (that's us 👋)
- [Shuffle.dev](https://shuffle.dev) for the templates - for further customization options, check out their site.
- [Tailwind CSS](https://tailwindcss.com) - our favourite CSS framework
- [Next.js](https://nextjs.org/) - Next.js
- [Vercel](https://vercel.com/) - Our favourite hosting platform


