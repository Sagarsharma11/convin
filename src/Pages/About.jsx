import React from 'react'

const About = () => {
    const data = {
        "bucket3": [
          {
            "card_title": "title",
            "cardUrl": "cardurl"
          }
        ],
        "bucket2": [
          {
            "card_title": "title",
            "cardUrl": "cardurl"
          }
        ]
      }
    const clickme = () =>{
        var temp = [
                {
                  "card_title": "title",
                  "cardUrl": "cardurl"
                }
              ]
        var card = {
          "card_title_2": "title_2",
          "cardUrl_2": "cardurl_2"
        }
        data['bucket4']=[]
        data.bucket4.push(temp)
        console.log(`hello`)
        data.bucket2.push(card)
        console.log(data)
    }
  return (
    <div>
        <button onClick={clickme}> click me </button>
    </div>

  )
}

export default About