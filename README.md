# GraphQL API

- GraphQL은 over-fetching을 해결 할수있다
    /users/ GET 
    
너무 많은 정보들이 오고가서 사용자는 쓸데 없는정보를
개발자는 점검할때 너무 많은 정보 때문에 리뷰를 하기 
어려워진다

- GraphQL은 under-fetching을 해결 할수있다
    /feed/
    /notifications/
    /user/1/

REST에서는 하나를 완성하려고 많은 소스를 요청하게 된다


    query {
        feed {
            comments
            likeNumber
        }
        notifications {
            isRead
        }
        user {
            username
            profilePic
        }
    }


    {
        feed: [
            {
                comments:1,
                likeNumber:20
            }
        ],
        notifications: [
            {
                isRead:true
            },
            {
                isRead:false
            }
        ],
        user: [
            username:"jeong",
            profilePic:"http:"
        ]
    }