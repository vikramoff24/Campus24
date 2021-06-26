# ReadMe.md

### TODO

1. Pagination + Infinite Scroll
2. Communities (carousel display component available: src/components/layout/CommunitiesDisplay.js and src/components/layout/CommunitiesItemCard.js)
3. User Posts (component available: src/components/layout/ProflePostContainer.js)
4. Picture Upload (in posts, events and users)
5. Replace Icons (flame, comment, share)
6. Posts should hold the Uid of creator and the profile pic should be updated from the user object (else will lead to bug: when the user changes the profile picture, the old picture will be displayed)

### Note

1. Some form of state-management needs to be added. Currently passing data as props everywhere
2. The Communities Schema was not supplied to me, so it has not been added and the ones being displayed in the home page is actually from a local database server.
3. The Project uses Firebase Real-Time Database, if the android app uses Firebase Firestore as the Database the components have to be overwritten (CreateEventForm, CreatePostForm, EventContainer, PostContainer, PostItem, ProfileDetails)
4. The configuration for the firebase app is stored in src/firebase/env.js but its added to .gitignore file, so it has to be created for using the app
5. The Sidebars contain hard-coded data as the data was not available

### Folder Structure

    .
    ├─ .gitignore
    ├─ db.json
    ├─ output.txt
    ├─ package─lock.json
    ├─ package.json
    ├─ README.md
    |
    ├─── node_modules
    ├─── public
    |    ├─ favicon.png
    |    ├─ index.html
    |    ├─ manifest.json
    |    ├─ robots.txt
    |    └───img
    |        ├───layout
    |        |   ├─ chatH.svg
    |        |   ├─ chatN.svg
    |        |   ├─ eventsH.svg
    |        |   ├─ eventsN.svg
    |        |   ├─ homeH.svg
    |        |   ├─ homeN.svg
    |        |   ├─ notesH.svg
    |        |   ├─ notesN.svg
    |        |   ├─ noticeH.svg
    |        |   ├─ noticeN.svg
    |        |   ├─ notifsH.svg
    |        |   └─ notifsN.svg
    |        |
    |        └───pages
    └───src
        ├─ App.js
        ├─ App.test.js
        ├─ index.js
        ├─ logo.svg
        ├─ serviceWorker.js
        ├─ setupTests.js
        |
        ├───components
        |   ├───HOC (Higher Order Components)
        |   |   ├─LayoutRegistered.js (Layout for registered view, a sidebar on each side with the center holding the main page)
        |   |   └─LayoutUnregistered.js (Layout for unregistered view, footer)
        |   |
        |   ├───layout
        |   |   ├─ CommunitiesDisplay.js (Communities carousel in home page)
        |   |   ├─ CommunitiesItemCard.js (Communities Item Card in the carousel in home page)
        |   |   ├─ CreateEventForm.js (Form to create Event)
        |   |   ├─ CreatePost.js (Create Post Widget "+" button on home and event pages)
        |   |   ├─ CreatePostForm.js (Form to create Post)
        |   |   ├─ EventsContainer.js (Events Container for event page)
        |   |   ├─ FooterUnregistered.js (Footer for Unregistered user same as www.campus24.in)
        |   |   ├─ Navbar.js (Navbar for Registered User)
        |   |   ├─ NavbarUnregistered.js (Navbar for Unregistered user same as www.campus24.in)
        |   |   ├─ NavigationFooter.js (Footer Nav for mobile view)
        |   |   ├─ NewsCarousel.js (News Carousel in Home Page)
        |   |   ├─ PostContainer.js (Post Container for Home Page)
        |   |   ├─ PostItem.js (Post Item)
        |   |   ├─ PostLabel.js (Tags for the post)
        |   |   ├─ ProflePostContainer.js (Container for User's Post in Profile Page: NOT IMPLEMENTED)
        |   |   ├─ ScopeSwap.js (Home Page Component to Change Scope: global/campus)
        |   |   ├─ SidebarCommunities.js (Sidebar Communities)
        |   |   ├─ SidebarCommunitiesItem.js (Sidebar Communities Item)
        |   |   ├─ SidebarInfo.js (Side bar info: left sidebar)
        |   |   ├─ SidebarInfoBlogMediaItem.js (Sidebar Component for Blogs and Media)
        |   |   ├─ SidebarInfoCatchUpItem.js (Sidebar Catch Up Item)
        |   |   ├─ SidebarNews.js (Side News Component with hard coded data: on right sidebar)
        |   |   ├─ SideNavigation.js (Side Nav Component: used in mobile view as top nav dropdown replacement)
        |   |   ├─ SideNewsItem.js (Side News Component Item)
        |   |   ├─ UserInfo.js (User Profile Page main component)
        |   |   └─ WhatsOnYourMind.js (Used in Event and home page just as placeholders)
        |   |
        |   └───pages
        |       ├─ About.js (About page)
        |       ├─ CreateEventPage.js (Create Event Page)
        |       ├─ CreatePostPage.js (Create Post Page)
        |       ├─ Error404.js (Page for Page not Found Error)
        |       ├─ Events.js (Events view page)
        |       ├─ Help.js (Help Page)
        |       ├─ Loader.js (Loading Page)
        |       ├─ Login.js (Login Page)
        |       ├─ MainPage.js (Home Page)
        |       ├─ Profile.js (Profile Page)
        |       ├─ ProfileDetails.js (Profile Update Page - Username, institute, etc)
        |       ├─ SignUp.js (Sign up page)
        |       ├─ TellAFriend.js (Share Page)
        |       └─ VerificationRequest.js (Page telling user to verify email)
        |
        ├───firebase
        |   ├─ env.js (Environment for firebase ignored by git)
        |   └─ firebase.js (firebase setup)
        |
        └───static
            ├───img
            |   ├───layout
            |   |   ├─ about.svg
            |   |   ├─ commentIcon.svg
            |   |   ├─ directory.svg
            |   |   ├─ emojiBtn.svg
            |   |   ├─ footerpic.png
            |   |   ├─ footerplay.png
            |   |   ├─ help.svg
            |   |   ├─ likeIcon.svg
            |   |   ├─ Logo.svg
            |   |   ├─ LogoHeaderUnregistered.svg
            |   |   ├─ logOut.svg
            |   |   ├─ settings.svg
            |   |   ├─ shareIcon.svg
            |   |   └─ tellAFriend.svg
            |   |
            |   └───pages
            |       ├─ about.svg
            |       ├─ detailsBackground.svg
            |       ├─ EyeC.svg
            |       ├─ EyeFillC.svg
            |       ├─ EyeFillN.svg
            |       ├─ EyeN.svg
            |       ├─ help.svg
            |       ├─ loginBackground.svg
            |       └─ tellAFriend.svg
            |
            ├───script
            |   ├───layout
            |   |   ├─ communitiesScroll.js (Communities Scroll Script for Home page)
            |   |   └─ navbar.js (Navbar View Switch Script based on screen size)
            |   |
            |   └───pages
            |       └─ tellAFriend.js (Copy link on click Script)
            |
            └───style
                ├───common
                |   └─ shared.css
                |
                ├───layout
                |   ├─ common.css
                |   ├─ communitiesItemCard.css
                |   ├─ communitiesList.css
                |   ├─ createPost.css
                |   ├─ footerUnregistered.css
                |   ├─ navbar.css
                |   ├─ navbarUnregistered.css
                |   ├─ newsCarousel.css
                |   ├─ postItem.css
                |   ├─ postLabel.css
                |   ├─ scopeSwap.css
                |   ├─ sidebarCommunities.css
                |   ├─ sidebarInfo.css
                |   ├─ sidebarInfoBlogMedia.css
                |   ├─ sidebarNews.css
                |   ├─ userInfo.css
                |   └─ whatsOnYourMind.css
                |
                └───pages
                    ├─ common.css
                    ├─ help.css
                    ├─ loader.css
                    ├─ loginAndSignup.css
                    ├─ mainPage.css
                    ├─ tellAFriend.css
                    └─ verificationRequest.css
