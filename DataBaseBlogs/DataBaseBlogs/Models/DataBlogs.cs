using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace DataBaseBlogs.Models
{
    public class DataBlogs 
    {
        public static void Initialize(BlogContext contenxt)
        {
            if (!contenxt.Blog.Any())
            {
                /*Blog blog1 = new Blog
                {
                    Title = "Making Sense of the Week That Was #42: The Past, Present, and Future of Family",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*LC2u4kk5FFaJWmhPcMoq6g.jpeg",
                    Information = "The TV series All in the Family debuted in 1971 and remained for 5 years the most-watched show on television. It was groundbreaking for openly talking about serious issues of the day, with storylines evolving around racism, women’s rights, the Vietnam War, homosexuality, and rape, while other shows featured surface-level plots. “Even people who just came in for an episode or two or three remarked about how collaborative the show was,” says writer Jim Colucci who put together the new book All in the Family: The Show that Changed Television, which features interviews with cast and crew members.",

                };
                Blog blog2 = new Blog
                {
                    Title = "The 20 Reasons Why Sensemaking & Critical Thinking Matter",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*oNVY0-SqJlAXTuj_sufBIw.png",
                    Information = "Most leaders, generations and societies throughout history have bemoaned the increasing complexity of their worlds, However, Yaneer Bar-Yam actually went out , explored and proved it. Yes, indeed life in our era currently is more complex than ever, riddled with choices, interdependent factors and the instability of its institutions.Sensemaking allows people to stay curious with the unknown rather than jumping straight to decisions in attempts to simplify. Critical thinking provides the capacity to look for the right causal factors and dependencies and determine truths vs. opinions. Although sometimes overused, we are living in a VUCA world — with more volatility, uncertainty, chaos and ambiguity in all of our ecosystems. Great cognitive skills and investigative enquiry help us get to the other side of our complexity Rubicons.#4. Deals with Risk and Uncertainty Better in Business and Innovation The stakes at play in business are higher than they have ever been. Look left. Look right. See your top 10 competitors, nearly half of them won’t be there by the end of this decade. The average lifespan of large companies has plummeted from over 60 years to now merely a decade. Despite a world of change & innovation panaceas being peddled out, the reality is only 10–30% of innovations succeed.",

                };
                Blog blog3 = new Blog
                {
                    Title = "The Grey Swan Guild News Wrap — The Week That Was Friday, October 15th, 2021.",
                    ImageBase64Url = "https://miro.medium.com/max/1400/0*jQUZGK_mjp6elrml.png",
                    Information = "In the last two months, I have been very closely involved with what the Gaming community is, whether it be taking the reins of my own games interacting with other people around the world or being able to try a premium game a week in advance of it’s release. ",
                };
                Blog blog4 = new Blog
                {
                    Title = "How To Make and Sell Your First NFT In 10 Minutes",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*xBlV6IWyfuodX4hpdisHZw.png",
                    Information = "The TV series All in the Family debuted in 1971 and remained for 5 years the most-watched show on television. It was groundbreaking for openly talking about serious issues of the day, with storylines evolving around racism, women’s rights, the Vietnam War, homosexuality, and rape, while other shows featured surface-level plots. “Even people who just came in for an episode or two or three remarked about how collaborative the show was,” says writer Jim Colucci who put together the new book All in the Family: The Show that Changed Television, which features interviews with cast and crew members.",

                };
                Blog blog5 = new Blog
                {
                    Title = "The Best Memorization Techniques: Learn Faster and Remember More",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*x62Mdcib5wKoD4pMRvIvGg.png",
                    Information = "We all would like to think that having the world’s knowledge at our fingertips makes us smart. But I fear the reality is different. Having everything readily available online does make it easier to find the information; however, it makes our memory worse. What’s the point of remembering someone’s telephone…",

                };
                Blog blog6 = new Blog
                {
                    Title = "Hey, It’s Not Too Late To Invest in Crypto",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*1Hc2bd4GDC2KkcpK2_2-aQ.jpeg",
                    Information = "Every year, it seems like it’s too late to invest in cryptocurrencies. I mean, if you bought $500 in Ethereum in 2015, it would be worth over $5 million today. And don’t even get me started on Bitcoin. In July 2011, two years after Bitcoin was created, one coin cost…",

                };
                Blog blog7 = new Blog
                {
                    Title = "The Best Blogs to Follow If You’re Into Web Development",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*F4AvAYHSpEaK302DYsC9aQ.png",
                    Information = "Web development is one of those fields that requires a lot of dedication. But if you’re willing to put in the work, the rest usually takes care of itself. …",

                };
                Blog blog8 = new Blog
                {
                    Title = "The 20 Reasons Why Sensemaking & Critical Thinking Matter",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*oNVY0-SqJlAXTuj_sufBIw.png",
                    Information = "Most leaders, generations and societies throughout history have bemoaned the increasing complexity of their worlds, However, Yaneer Bar-Yam actually went out , explored and proved it. Yes, indeed life in our era currently is more complex than ever, riddled with choices, interdependent factors and the instability of its institutions.Sensemaking allows people to stay curious with the unknown rather than jumping straight to decisions in attempts to simplify. Critical thinking provides the capacity to look for the right causal factors and dependencies and determine truths vs. opinions. Although sometimes overused, we are living in a VUCA world — with more volatility, uncertainty, chaos and ambiguity in all of our ecosystems. Great cognitive skills and investigative enquiry help us get to the other side of our complexity Rubicons.#4. Deals with Risk and Uncertainty Better in Business and Innovation The stakes at play in business are higher than they have ever been. Look left. Look right. See your top 10 competitors, nearly half of them won’t be there by the end of this decade. The average lifespan of large companies has plummeted from over 60 years to now merely a decade. Despite a world of change & innovation panaceas being peddled out, the reality is only 10–30% of innovations succeed.",

                };
                Blog blog9 = new Blog
                {
                    Title = "3 Efficient Time Management Techniques for Busy People",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*13VWvCSU5oPAm8Pnbpgi5A.png",
                    Information = "The kitchen is dirty, the deadlines are screaming for your attention, and the fridge is inconveniently empty. Again. It might feel like you just woke up and the day is already over. It might…",

                };
                Blog blog10 = new Blog
                {
                    Title = "How To Find the Information You Are Looking For",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*ACfUaZPWDF9-ypIuIQPi2Q.png",
                    Information = "If you just enter whatever is in your mind, mindlessly hit search, and stay on the first page of search results, I’m sorry, but you are probably using Google wrong. Google is a powerful search engine; however, it doesn’t really care if it shows you the right information. All it…",

                };
                Blog blog11 = new Blog
                {
                    Title = "The Best Code Playgrounds To Practice Your Skills",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*mDgJ5NKPtTnvkN3np59bJQ.jpeg",
                    Information = "In programming, it’s all about practice. Whether you are learning a new programming language, concept, or framework, you need to practice your newly acquired skills constantly. Luckily, you don’t have to spend any time on setup nowadays. …",
                };
                Blog blog12 = new Blog
                {
                    Title = "Write For Us",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*msFlUe_uZknWisLa8Ef7Rg.jpeg",
                    Information = "In the last two months, I have been very closely involved with what the Gaming community is, whether it be taking the reins of my own games interacting with other people around the world or being able to try a premium game a week in advance of it’s release. ",

                };
                Blog blog13 = new Blog
                {
                    Title = "Making Sense of the Week That Was #42: The Past, Present, and Future of Family",
                    ImageBase64Url = "https://miro.medium.com/max/1400/0*UVI2-vYTCFqO1yYv.jpg",
                    Information = "The TV series All in the Family debuted in 1971 and remained for 5 years the most-watched show on television. It was groundbreaking for openly talking about serious issues of the day, with storylines evolving around racism, women’s rights, the Vietnam War, homosexuality, and rape, while other shows featured surface-level plots. “Even people who just came in for an episode or two or three remarked about how collaborative the show was,” says writer Jim Colucci who put together the new book All in the Family: The Show that Changed Television, which features interviews with cast and crew members.",

                };
                Blog blog14 = new Blog
                {
                    Title = "The 20 Reasons Why Sensemaking & Critical Thinking Matter",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*oNVY0-SqJlAXTuj_sufBIw.png",
                    Information = "Dare To Be Better is always looking for new writers who would like to contribute. All articles will be promoted on Twitter and Pinterest; over 80% of articles published get distributed.",

                };
                Blog blog15 = new Blog
                {
                    Title = "Top Programming Languages and Web Frameworks To Learn in 2022",
                    ImageBase64Url = "https://miro.medium.com/max/1400/1*3MVh-JP42tkTIOPlLXsHPg.png",
                    Information = "Every year, one of the biggest developer networks Stack Overflow asks thousands of developers about how they learn and work. Their annual developer survey is the perfect source of information for new developers and those who are looking to advance their careers. Let’s take a look at the most popular…",

                };*/
               
                //contenxt.Blog.AddRange(new List<Blog> { blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12, blog13, blog14, blog15 });
                //contenxt.SaveChanges();
            }
            
        }
    }
}
