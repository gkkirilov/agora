<template>
    <div class="relative isolate px-6 pt-5 lg:pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Political Compass!</h1>
                <!-- Start banner -->
                <!-- <div class="flex justify-center items-center gap-x-6 bg-gray-200 py-2.5 rounded-lg px-3">
               <div class="text-sm leading-6 text-gray-900">
                  <strong class="font-semibold">Current Score: {{ politicalScore }}</strong>
                  <div>-4 and below = Libertarian</div>
                  <div>-4 to -2  = Liberal</div>
                  <div>-2 to +2  = Centrist</div>
                  <div>+2 to +4 = Conservative</div>
                  <div>4 and above = Authoritarian</div>
               </div>
            </div> -->
                <!-- End banner -->

                <div v-if="!completed && selectedQuestions.length">
                    <transition v-if="!justification" name="slide-fade" mode="out-in">
                        <p class="text-gray-600 mx-auto mt-10 text-xl" :key="currentQuestion">
                            {{ selectedQuestions[currentQuestion].question }}
                        </p>
                    </transition>

                    <transition-group v-if="!hideAnswers" name="list" tag="div"
                        class="mt-10 mb-4 flex flex-col gap-4 items-center justify-center">
                        <div v-for="(answer, index) in shuffledAnswers[currentQuestion]"
                            :key="currentQuestion + '-' + index" @click="selectAnswer(answer)"
                            class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            {{ answer.answer }}
                        </div>
                    </transition-group>
                    <div v-if="justification" class="text-gray-600 mx-auto mt-10 text-xl">
                        {{ justification }}
                        <div @click="changeQuestions()"
                            class="mt-4 rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Continue
                        </div>
                    </div>
                </div>
                <div v-else-if="completed" class="text-4xl mt-20">
                    Well done! <br> <span class="font-bold mt-4">You are {{ party }}</span>
                    <div>

                        <NuxtLink to="/game" @click="changeQuestions()"
                    class="rounded-md bg-gradient-to-tr from-indigo-400 to-indigo-700 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get Started
            </NuxtLink>
        </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const indexStore = useIndexStore()
const { politicalParty } = storeToRefs(indexStore)

const user = useSupabaseUser()
const politicalScore = ref(0)
const currentQuestion = ref(0)
const completed = ref(false)
const selectedQuestions = ref([])
const shuffledAnswers = ref([])
const justification = ref('')
const hideAnswers = ref(false)


var party = computed(() => {
    var party = ''
    if (politicalScore.value >= 4) {
        party = 'Authoritarian'
    } else if (politicalScore.value >= 2 && politicalScore.value < 4) {
        party = 'Conservative'
    } else if (politicalScore.value > -2 && politicalScore.value < 2) {
        party = 'Centrist'
    } else if (politicalScore.value > -4 && politicalScore.value <= -2) {
        party = 'Liberal'
    } else if (politicalScore.value <= -4) {
        party = 'Libertarian'
    }

    politicalParty.value = party
    return party
})


var allQuestions = [
    {
        "topic": "Social Welfare",
        "question": "Your friend has lost their job due to their company shutting down and they are about to lose their home to the bank. What should they do?",
        "answers": [
            {
                "position": "Left",
                "answer": "Apply for a welfare program to cover the cost of their home.",
                "justification": "Extensive welfare programs that address social inequalities are usually a left-leaning political position."
            },
            {
                "position": "Moderate",
                "answer": "Take out a government-funded loan to keep themselves afloat while they look for a good replacement job.",
                "justification": "A moderate position on the topic of the welfare system usually focuses on a balance between government support and personal responsibility."
            },
            {
                "position": "Right",
                "answer": "Pick themselves up and go to all the job interviews they can find.",
                "justification": "A right-leaning political position usually focuses on minimizing welfare, prioritizing individual responsibility, and promoting private charity."
            }
        ]
    },
    {
        "topic": "Social Welfare",
        "question": "You find out that your local community center, which provides meals and support for the homeless, is facing funding cuts and may have to close down. What do you do?",
        "answers": [
            {
                "position": "Left",
                "answer": "Campaign for increased government funding and support for social programs that directly aid the homeless and vulnerable populations in your community.",
                "justification": "A left-leaning approach to social welfare emphasizes the role of the government in providing for the needs of its citizens, especially the most vulnerable. Advocating for increased public funding for social programs reflects a belief in addressing societal issues collectively and reducing inequality."
            },
            {
                "position": "Moderate",
                "answer": "Support a partnership between the government, non-profits, and private businesses to create a sustainable funding model for the community center.",
                "justification": "A moderate stance on social welfare often looks for balanced solutions that involve cooperation between public and private sectors. This approach aims to leverage the strengths of each sector to address social issues in a pragmatic and sustainable manner, promoting social responsibility while encouraging community involvement and innovation."
            },
            {
                "position": "Right",
                "answer": "Encourage local businesses and community members to donate to the center and volunteer their time, emphasizing self-reliance and community-driven solutions.",
                "justification": "A right-leaning perspective on social welfare tends to prioritize minimal government intervention, advocating instead for individual and community responsibility. This position promotes the idea that communities should come together to support their members through private charity and volunteerism, reflecting a belief in the power of free markets and personal initiative to address social needs."
            }
        ]
    },
    {
        "topic": "Healthcare",
        "question": "You fall and break your finger - unfortunate, happens to the best of us. You know that you can go to the emergency room in your local hospital, but there's likely going to be a long wait. What do you do?",
        "answers": [
            {
                "position": "Left",
                "answer": "Go to the emergency room and wait for your turn.",
                "justification": "In a more left-leaning government, access to healthcare is available to everyone, regardless of social class or income. The state provides universal healthcare for its citizens and one merely needs to wait for their turn."
            },
            {
                "position": "Moderate",
                "answer": "Visit an urgent care clinic or hop on a quick video call with a doctor.",
                "justification": "In this case, one has the option of visiting their local healthcare unit or hospital but also the ability to look for a faster solution possibly even through a doctor online. These faster services are available to those who wish to pay extra. Nonetheless, the ability to visit a doctor is still free."
            },
            {
                "position": "Right",
                "answer": "Shift through some reviews of nearby doctors online and pick one that you can afford.",
                "justification": "In this situation, the state does not provide free healthcare for you. You are usually under some health insurance plan or you even have the ability to not be included in any health plan and deal with health issues on an ad-hoc basis based on your level of income and financial capability."
            }
        ]
    },
    {
        "topic": "Healthcare",
        "question": "A new disease is impacting a small portion of the population. It’s survivable but requires difficult ongoing treatment. The cost of medication and care is huge and cannot be afforded by all. What do you do?",
        "answers": [
            {
                "position": "Left",
                "answer": "Advocate for universal healthcare that covers all medical expenses, including long-term illness treatments.",
                "justification": "Advocating for universal healthcare, where the government ensures health coverage for all citizens regardless of their financial status, aligns with left-leaning ideologies. This position emphasizes healthcare as a fundamental right and seeks to address disparities in access to care."
            },
            {
                "position": "Moderate",
                "answer": "Support a mixed healthcare system where the government covers the cost of health insurance for long-term illnesses while utilizing private health providers.",
                "justification": "A moderate approach to healthcare often involves a combination of public and private sectors working together to provide coverage. This perspective seeks to balance accessibility to healthcare with maintaining the quality and innovation provided by the private market."
            },
            {
                "position": "Right",
                "answer": "Encourage saving for personal health savings accounts and shopping around for competitive insurance plans to cover long-term care needs.",
                "justification": "A right-leaning position on healthcare typically emphasizes individual responsibility and the free market's role in providing health services. This position stands for minimal government intervention, promoting personal savings and competition among private insurers to lower costs and improve quality."
            }
        ]
    },
    {
        "topic": "Foreign policy",
        "question": "“Wasted money!” complains your uncle, while reading a newspaper. A contribution in there claims that the EU just pledged 50 million euros to combat famine and improve sanitation in the Horn of Africa. What do you think?",
        "answers": [
            {
                "position": "Left",
                "answer": "People in Africa deserve these funds and more. All humans on the planet deserve decent living standards. We have a moral and historical obligation to help out.",
                "justification": "Left-wing oriented people and especially (neo)Marxists believe that resources should be redistributed according to needs, not necessarily based on merit. They also support reparations for countries that were oppressed in the past few centuries by colonizing great powers."
            },
            {
                "position": "Moderate",
                "answer": "Fifty million euros is not enough to change the situation in Africa but may help enough to prevent the worst. It is an amount EU member states can afford.",
                "justification": "The idea behind this answer is some moderate redistribution, which is a compromise behind leftist and right-wing thinking. In other words, some help is appropriate, but should not significantly undermine the resources of the donor."
            },
            {
                "position": "Right",
                "answer": "The EU is being too generous to other nations while we are struggling domestically. We should support our own people first, and not distant countries.",
                "justification": "Right-wing-oriented people believe in individuality and that resources should be redistributed according to merit, not need. This also applies to international relations, where supporting one’s own country comes first."
            }
        ]
    },
    {
        "topic": "Immigration",
        "question": "You see a poster on a railway station. A boat with black migrants from Africa is depicted with the text 'This land is ours, all migrants must return back to Africa!'. What are your thoughts about this?",
        "answers": [
            {
                "position": "Left",
                "answer": "Migrants benefit our society and economy as there are many jobs available and integration is inevitable. Europe is rich and can help people from all over Earth.",
                "justification": "Positive and negative opinions on migration are linked to political preferences. Left-wing-oriented people are generally more supportive of migration and highlight the benefits of migration."
            },
            {
                "position": "Moderate",
                "answer": "We do need some restrictions. Europe can help refugees escape war but must be more strict with economic migrants as they do not always benefit our society.",
                "justification": "A moderate stance on the issue which also reflects the current situation and ruling of international law."
            },
            {
                "position": "Right",
                "answer": "There are indeed too many migrants in Europe now. They burden our society, hardly find work, and may become a security problem when coming in large numbers.",
                "justification": "Positive and negative opinions on migration are linked to political preferences. Right-wing-oriented people are generally against migration and highlight the negatives of migration."
            }
        ]
    },
    {
        "topic": "Immigration",
        "question": "There's an ongoing debate in your country about adjusting the strictness of immigration policies, such as visa issuance and granting citizenship. How do you believe the government should handle immigration?",
        "answers": [
            {
                "position": "Left",
                "answer": "I support more open immigration policies, including easier pathways to citizenship and more humanitarian visas, to promote diversity and help those in need.",
                "justification": "A left-leaning position typically prefers more inclusive and less restrictive immigration policies, seeing immigration as a positive element for cultural diversity and economic growth."
            },
            {
                "position": "Moderate",
                "answer": "I support a balanced and safe immigration policy, with a strict but fair visa-issuing system and achievable ways to gain citizenship.",
                "justification": "A moderate position on immigration looks for a middle ground, recognizing the need for national security while also acknowledging the contributions of immigrants to society and the economy."
            },
            {
                "position": "Right",
                "answer": "I stand for stricter immigration controls and limited numbers of visas issued to prioritize national security and the interests of our current citizens.",
                "justification": "A right-leaning position tends to prioritize national security and the economic interests of existing citizens, often advocating for stricter immigration policies to control the flow of immigrants."
            }
        ]
    },
    {
        "topic": "Role of the State",
        "question": "The government is planning to increase taxes on cigarettes and alcohol, and decrease value-added tax on fruits and vegetables. Do you agree with this intervention?",
        "answers": [
            {
                "position": "Left",
                "answer": "Yes, I do. I believe that things that harm people and our society should be restricted by the state, and helping people buy vital goods such as fruit is good.",
                "justification": "Left-wing ideology believes in a strong state that is tasked with protecting people from harm. The use of positive or negative stimuli by the state is supported as a tool to guide citizens toward well-being."
            },
            {
                "position": "Moderate",
                "answer": "I'm not sure I can agree or disagree with government intervention in general, as I support it in about as many cases as I reject it.",
                "justification": "There are many levels of state involvement and its role in the society and economy. A position in between a strong and minimal role of the state is thus moderate."
            },
            {
                "position": "Right",
                "answer": "No, I don't. I believe in freedom of choice. It's our personal responsibility to avoid bad things, not the prerogative of the state.",
                "justification": "Right-wing thinkers believe in individual responsibility and freedom. The state should play a minimal role in society: people pay minimal taxes, but they should not expect state intervention in case of need."
            }
        ]
    },
    {
        "topic": "Role of the State",
        "question": "The prime minister announces sweeping reforms related to transportation. All drivers will need to pay a special fee when using all roads, not just highways. Whether you are a driver or not, what is your stance on this?",
        "answers": [
            {
                "position": "Left",
                "answer": "Reinforcing the state’s budget can lead to better road maintenance and create new jobs. I would take more fees over privatisation, which almost never works.",
                "justification": "Roads, health care, or education are public goods and services. As such, they need to be provided to all citizens and residents for free by the state. Taxes and other fees collected are redistributed and then used to cover various sectors to benefit the people. Subsidies can be used to balance the effects of fees on lower-income groups. This premise is used by the Left and it’s one of key elements of the welfare state, which has a strong position in society and limits privatisation in key sectors."
            },
            {
                "position": "Moderate",
                "answer": "Fees should remain as they are for roads because the reforms sound too excessive. I would prefer if the state taxed entertainment or something not so vital.",
                "justification": "In this case, the centrist approach is hesitant towards new fees and obligations but also sees no need to privatise the road network. It’s enough to just raise fees or taxes on non-essential goods or services and use them for road maintenance instead."
            },
            {
                "position": "Right",
                "answer": "I think it would be better if private companies were managing fee collection on the road network, as they would more competently and competitively maintain it.",
                "justification": "Right-wing thinkers and politicians would prefer to have a state that is less dominant and puts an emphasis on the free market. Part of the Right would prefer a greatly reduced state, with almost everything privatised."
            }
        ]
    },
    {
        "topic": "Policy and International Relations",
        "question": "You are walking on the street and come across an anti-USA demonstration. The protesters are criticizing the imperialistic foreign policy of the USA and its stifling world dominance. How do you feel about this?",
        "answers": [
            {
                "position": "Left",
                "answer": "I agree with them. The USA is an aggressive country and impedes international relations with other countries such as China, India, and Russia, who also have a lot to say.",
                "justification": "Left-leaning people usually protest imperialism and the dominance of a superpower like the USA. Instead, they prefer a balanced international system and polyphony of opinion, so they often side with other countries, who are “weaker” and cannot stand up to pressures from the USA."
            },
            {
                "position": "Moderate",
                "answer": "The protesters are partially right, but superpowers always promote their interests and make mistakes along the way. I still prefer the USA to Russia or China.",
                "justification": "A moderate opinion prefers the status quo or is cautiously in support of the USA as a sort of pragmatic concession. Centrists tend to recognize that great powers can cause as much good as they can bad, and do not put too much faith in experimental alternatives that have never been proven to work."
            },
            {
                "position": "Right",
                "answer": "I disagree, as a world without the leading role of the USA will just let non-democratic countries like China or Russia take hard-earned rights away from us.",
                "justification": "Right-wing-oriented people usually stress the importance of a trans-Atlantic partnership with the USA, and are critical towards non-democratic powers such as Russia or China."
            }
        ]
    },
    {
        "topic": "Policy and International Relations",
        "question": "Your government is launching a referendum months ahead of a general UN vote. How do you vote and why, if the question asked is: 'Should we join a new UN Declaration on international representation of minorities?'",
        "answers": [
            {
                "position": "Left",
                "answer": "I vote yes. We must ensure that the rights of all minorities are respected, and all members of society are well represented both domestically and abroad.",
                "justification": "It’s important to cooperate internationally because that’s how we can better find solutions to various issues. National differences are not important, democratic values and respect for human rights and freedoms are uniting us. The left wing defends the interests of minorities and believes that the same standard should be used everywhere. Minorities should be also represented at an international level. Regional ethnic autonomy can help ensure better representation of minorities and is not seen as a threat."
            },
            {
                "position": "Moderate",
                "answer": "I would vote yes. I think there is enough representation of minorities, but it’s always possible to improve and discussions with others can inspire us.",
                "justification": "International cooperation is important and beneficial. There are national interests but also needs of minorities that cannot be overlooked. A centrist approach means that national contexts need to be taken into account and one solution cannot be applied everywhere. Minorities should be also represented at an international level. Regional ethnic autonomy is seen as an option for better representation of minorities if necessary."
            },
            {
                "position": "Right",
                "answer": "I vote no. Our laws and NGOs are enough to protect the rights and freedoms of minorities. We are a sovereign country and need no further international controls.",
                "justification": "The right wing is not against international cooperation, but it emphasises national sovereignty and defends national interests. In this context, the state decides well on how to protect the rights and freedoms of minorities living in its territory and it represents them sufficiently on an international level. Regional ethnic autonomy is not a desired option for better representation of minorities, as it may lead to separatist tendencies."
            }
        ]
    },
    {
        "topic": "Corporate Governance",
        "question": "Your friends are arguing. Raya claims that multinational corporations are overly good and regulating them might be controversial. Ali believes that they are evil and require strong regulation. What do you think?",
        "answers": [
            {
                "position": "Left",
                "answer": "I agree more with Ali.",
                "justification": "Regulating corporations is one of the key political dilemmas. Ali is more in favor of regulation, which is much closer to a left-wing understanding of the issue."
            },
            {
                "position": "Moderate",
                "answer": "I somehow agree with both of them.",
                "justification": "An inclination to the neutral understanding of corporations (positives and negatives are somewhat balanced) is close to a moderate stance on the issue."
            },
            {
                "position": "Right",
                "answer": "I agree more with Raya.",
                "justification": "Regulating corporations is one of the key political dilemmas. Raya is merely against regulation which is a rather right-wing understanding of the issue."
            }
        ]
    },
    {
        "topic": "Corporate Governance",
        "question": "The opposition in your parliament is pushing for taxing multinational corporations in the country where they operate and generate profits, not in the countries of their primary establishment. How does that sound to you?",
        "answers": [
            {
                "position": "Left",
                "answer": "Good. Corporations are generating big profits here, but then pay taxes somewhere else. Changing the law will force them to share their wealth with the people.",
                "justification": "The Left believes that corporations and people involved there should pay taxes in the country from whence their incomes originate so that they contribute to the social welfare in that country and do not only generate profits there. Corporations naturally use legal ways to avoid higher taxation."
            },
            {
                "position": "Moderate",
                "answer": "It sounds right, but there should be some flexibility to give corporations time to adapt. I also don't believe shareholders should get taxed double as a result.",
                "justification": "Paying income tax in the country of origin of that income seems logical. Corporations always have the option to make structural changes to limit the negative effects of such taxation on the parent company. If shareholders paid the tax as well, it would be a kind of double taxation."
            },
            {
                "position": "Right",
                "answer": "Bad. Corporations already pay taxes in our country, such as VAT, and forcing this on them would interfere with their internal affairs and with the free market.",
                "justification": "People with right-wing thinking advocate for the sovereignty of companies and the primacy of free market laws when it comes to influencing their decisions. That means the state should interfere only at a minimum with their internal affairs (e.g. just through accounting and transparency regulations or VAT)."
            }
        ]
    },
    {
        "topic": "Police Affairs",
        "question": "Your cousin is a police officer and complains that the police should have more power. He says he could have prevented a theft if only there was no need for a warrant. What do you think about this situation?",
        "answers": [
            {
                "position": "Left",
                "answer": "The police already have enough power and a legal monopoly on violence. We should always try to limit their power instead of trying to expand it further.",
                "justification": "The Left usually argues that the power of the police should be limited, restricted, and strictly regulated by the law, as it can easily lead to an abuse of human rights."
            },
            {
                "position": "Moderate",
                "answer": "I believe even a thief has rights and in a democratic country, every interference with personal rights should be approved by the court.",
                "justification": "In most democratic states, the power of the police is regulated and subordinated to judiciary power. A centrist viewpoint sees this as a good balance, to ensure that the police are effective but not all-powerful."
            },
            {
                "position": "Right",
                "answer": "The police should have the right to apply excessive force when they think it will be more effective to enforce the law, like when saving lives or property.",
                "justification": "Right-wing-oriented people usually favor law enforcement and effective policing over personal rights and freedoms when it comes to ensuring the security of the individual."
            }
        ]
    },
    {
        "topic": "Police Affairs",
        "question": "Two boys stole an expensive electric car and set off a police chase, which ended when a police officer fired at the stolen vehicle to stop it. One minor was injured in the shoulder. What do you think about this?",
        "answers": [
            {
                "position": "Left",
                "answer": "The police officer should be investigated and punished. Poverty and social inequality can push young people to crime, it should not also cost them their lives.",
                "justification": "The left wing believes societal factors such as poverty, lack of opportunities, and systemic inequalities, contribute to youth involvement in crime. From this viewpoint, addressing the root causes of crime, rather than solely relying on punitive measures, is seen as more effective and just. Additionally, emphasising community-based interventions, investment in youth programs, and police reform is viewed as essential for preventing similar incidents in the future and promoting social justice. Excessive use of force by the police is always seen in a negative light."
            },
            {
                "position": "Moderate",
                "answer": "The incident must be thoroughly investigated, as the actions of the boys are just as intolerable as the hasty reaction from the police officer.",
                "justification": "The moderate perspective stems from a balanced consideration of the various factors at play in the situation. The importance of ensuring public safety while also acknowledging the need for accountability and fairness, particularly concerning the use of force by law enforcement. By advocating for a thorough investigation, they aim to address both immediate concerns and underlying issues pragmatically."
            },
            {
                "position": "Right",
                "answer": "The force used was necessary to protect the police and the public from potential harm. Anyone breaking the law should be held accountable for their actions.",
                "justification": "The justification for this right-wing perspective lies in the belief in upholding law and order as fundamental principles of a functioning society. From this viewpoint, the police officer's actions are seen as necessary to protect themselves and others from potential harm posed by criminal activity. Right-wing individuals typically emphasise personal responsibility and accountability, arguing that individuals who engage in criminal behaviour should face consequences for their actions."
            }
        ]
    },
    {
        "topic": "National Defense",
        "question": "Our nation is facing increased threats from external forces, and there's a big debate on how best to protect its citizens and sovereignty. What approach do you think the government should take?",
        "answers": [
            {
                "position": "Left",
                "answer": "I think funds should be redirected from the military budget towards diplomacy and international aid.",
                "justification": "A left-wing political position often emphasises diplomatic and non-military solutions and promotes peace through international cooperation."
            },
            {
                "position": "Moderate",
                "answer": "I think the state should maintain its current defence spending and focus on building strategic alliances with other nations.",
                "justification": "A moderate position on national defence typically involves a balanced approach, recognizing the need for a strong military while also valuing the importance of diplomacy and international partnerships to ensure national security."
            },
            {
                "position": "Right",
                "answer": "I think it is better to increase the defence budget to ensure the military has the latest technology and is prepared to meet any threat.",
                "justification": "A right-wing political position usually advocates for a strong national defence as a priority, supporting increased military spending."
            }
        ]
    },
    {
        "topic": "Youth Employment",
        "question": "Youth unemployment continues to rise in many places. What do you think would be the most effective way to reduce youth unemployment in your country?",
        "answers": [
            {
                "position": "Left",
                "answer": "Through substantial government intervention and investment in job creation programs tailored specifically for young people.",
                "justification": "Left-wing ideology emphasises the role of government intervention to address socioeconomic inequalities and provide support for marginalised groups. It advocates for policies such as job creation programs, fair wages, and comprehensive support systems to empower young workers and create a more equitable society."
            },
            {
                "position": "Moderate",
                "answer": "Through both government initiatives and private sector involvement. Incentivizing businesses to hire young workers through tax breaks or subsidies, for example.",
                "justification": "A moderate view favors a balanced approach to effectively tackle youth employment issues. By combining government intervention with private sector initiatives, it seeks to leverage the strengths of both sectors to create sustainable solutions. Incentivizing businesses to create jobs can stimulate economic growth, while investing in education and training can enhance the employability of young individuals, ultimately leading to long-term economic stability."
            },
            {
                "position": "Right",
                "answer": "Through reduced government intervention and promoting free market principles like lower taxes and reduced regulations on businesses.",
                "justification": "Right-wing ideology holds that free market principles and reduced government intervention lead to economic growth and job creation. By lowering taxes and removing regulatory barriers, businesses are incentivized to expand and hire more employees, including young people entering the workforce. This approach aims to foster a dynamic entrepreneurial environment where individuals are empowered to create their own opportunities, ultimately driving economic prosperity and reducing dependence on government assistance programs."
            }
        ]
    },
    {
        "topic": "Education",
        "question": "Your classmate is upset about the government's plan to cut arts and humanities from schools due to budget issues, preferring to enhance STEM subjects. What's your opinion on the matter?",
        "answers": [
            {
                "position": "Left",
                "answer": "These subjects foster critical thinking and creativity, which are just as important as science. It's about shaping well-rounded people, not just future workers.",
                "justification": "A Left political stance typically supports a comprehensive education, emphasizing a broad curriculum with arts and humanities to promote a well-rounded, culturally literate society."
            },
            {
                "position": "Moderate",
                "answer": "Instead of dropping programs, why not combine them? Arts should be an integral part of STEM - STEAM, perhaps?",
                "justification": "A moderate position would typically suggest a curriculum that is well-balanced. It proposes a practical approach for compromise and innovation in tackling budget and curriculum challenges."
            },
            {
                "position": "Right",
                "answer": "Given our limited resources, schools need to prioritise what keeps us globally competitive and prepares our children for successful careers.",
                "justification": "The right-leaning view stresses education's role in economic and career readiness. It pushes STEM as the main focus for getting in-demand jobs to align with job market needs and stay competitive."
            }
        ]
    },
    {
        "topic": "Education",
        "question": "Your high school is debating obligatory uniforms. Some argue it promotes equality and focuses on education rather than fashion, while others believe it stifles personal expression and individuality. Where do you stand?",
        "answers": [
            {
                "position": "Left",
                "answer": "Oppose uniform requirements.",
                "justification": "Advocates from the Left perspective argue that forcing students to wear uniforms is a violation of personal freedom and expression. They believe education should encourage diversity and individuality, fostering a more inclusive and expressive environment. Uniforms, they argue, might superficially level socio-economic distinctions but do little to address underlying inequalities or improve educational outcomes."
            },
            {
                "position": "Moderate",
                "answer": "Support a flexible uniform policy.",
                "justification": "A moderate viewpoint suggests a compromise, perhaps a flexible uniform policy that allows for some personalization. This approach aims to balance the benefits of uniforms in reducing distractions and promoting unity while still permitting a degree of personal expression. It reflects a belief in practical solutions that consider multiple interests and the potential for nuanced policy rather than an all-or-nothing stance."
            },
            {
                "position": "Right",
                "answer": "Advocate for strict uniform policies.",
                "justification": "From a conservative standpoint, uniforms are seen as a tool for instilling discipline, equality, and focus on education rather than social status or fashion trends. Proponents argue that a uniform policy promotes a sense of belonging and equality among students, preparing them for professional environments where dress codes are common. This perspective values tradition and the perceived benefits of uniformity over individual expression in the educational setting."
            }
        ]
    },
    {
        "topic": "Environmental Regulations",
        "question": "A news headline on your friend's phone: 'Government Proposes New Law to Ban Single-Use Plastics Nationwide.' They're upset about what they see as unnecessary government meddling. What's your take on this?",
        "answers": [
            {
                "position": "Left",
                "answer": "Good! Single-use plastics are a huge problem for our environment, ending up in oceans and harming wildlife. We need laws like this to protect our planet.",
                "justification": "The left-leaning viewpoint often supports strong environmental regulations to combat pollution and climate change, even if it means imposing stricter rules on businesses and consumers. This stance values long-term environmental health over short-term convenience or cost savings."
            },
            {
                "position": "Moderate",
                "answer": "It's a good idea in principle, but it might impact small businesses and consumers. A gradual phase-out and incentives to use alternatives would work better.",
                "justification": "A moderate position typically seeks a balanced approach to environmental regulation, recognizing the need for action against pollution while also considering the economic implications. This perspective favors solutions that encourage voluntary changes and provide support for transition, rather than outright bans."
            },
            {
                "position": "Right",
                "answer": "A ban restricting freedom of choice is not the answer. Improving education on recycling and the importance of personal responsibility is what we need instead.",
                "justification": "The position of the Right often emphasizes individual choice and market-based solutions over government intervention. This perspective prefers educational campaigns and incentives that encourage voluntary action by individuals and businesses, rather than imposing bans or regulations."
            }
        ]
    },
    {
        "topic": "Environmental Regulations",
        "question": "Huge amounts of perfectly good food are thrown away every day, as many products are no longer allowed to be sold to the end consumer simply because the best-before date has been exceeded. What is your opinion on this?",
        "answers": [
            {
                "position": "Left",
                "answer": "I condemn such wasteful handling of food. Food insecurity and poverty are increasing in many places, so there should be regulations to prevent such food waste.",
                "justification": "The left-wing perspective lies in the principles of social justice and environmental sustainability. Left-wing individuals prioritise equitable distribution of resources and reducing inequalities in society. From an environmental standpoint, they argue that food waste contributes to resource depletion and greenhouse gas emissions, exacerbating climate change and environmental degradation. Therefore, they advocate for systemic changes, such as regulations and donation programs, to ensure that surplus food is redirected to those in need rather than being discarded."
            },
            {
                "position": "Moderate",
                "answer": "Practical solutions are needed that balance the need to reduce waste with the need to maintain food safety standards and the economic viability of businesses.",
                "justification": "The justification for this moderate perspective stems from a pragmatic approach that acknowledges the complexity of the issue. Moderates recognize the importance of reducing food waste to address both social and environmental concerns, while also understanding the practical challenges faced by businesses in managing inventory and ensuring food safety. By advocating for practical solutions that balance the need to reduce waste with the need to maintain economic viability, moderates aim to address the issue effectively without imposing undue burdens on businesses."
            },
            {
                "position": "Right",
                "answer": "I am in favor of voluntary measures, market incentives, and minimal government intervention to address the problem of food waste.",
                "justification": "The justification for this right-wing perspective stems from a belief in limited government intervention and individual freedom. Right-wing individuals prioritize personal responsibility and free market principles, arguing that businesses should have the autonomy to manage their operations without excessive regulation. By advocating for market-based solutions and voluntary action, right-wing individuals aim to address the issue of food waste while preserving economic freedom and minimizing government interference."
            }
        ]
    },
    {
        "topic": "Public Transportation",
        "question": "You're stuck at the train station, again. The train's late, and your friend starts ranting about how bad the train system is. 'Seriously, something's gotta change,' they say. What's your take?",
        "answers": [
            {
                "position": "Left",
                "answer": "We must upgrade the trains and railways: fast, on time, cheap for all. Fund it by taxing big corporations and the rich. Make public transport the best choice.",
                "justification": "A left-leaning view promotes more investment in public transport infrastructure, aiming for a high-quality, environmentally friendly, and accessible system for all, funded by increased taxation on large corporations, reflecting a commitment to sustainability and social equality."
            },
            {
                "position": "Moderate",
                "answer": "We should upgrade the trains with both government funds and private investment. Lower fares for regular users could be a strong incentive for using the train.",
                "justification": "A centrist approach suggests both government and private investment to improve public transport, with incentives to cut car use for a more efficient, user-friendly public transport."
            },
            {
                "position": "Right",
                "answer": "Private companies should fairly compete for the opportunity to improve public transport and profit from it while upgrading the experience for everyone.",
                "justification": "A right-leaning stance focuses on less government spending, pushing for a market-led fix to public transport, with private competition boosting quality and reliability."
            }
        ]
    },
    {
        "topic": "Public Transportation",
        "question": "You want to get to work in a climate-friendly way, but using public transport increases commuting by 90 minutes, so you use your car instead. In your opinion, should there be political intervention in such situations?",
        "answers": [
            {
                "position": "Left",
                "answer": "Policy intervention is essential to tackle the lack of accessible and reliable public transport. Prioritizing climate action is paramount in transportation.",
                "justification": "The left-wing perspective stems from a commitment to social equality and environmental sustainability. Transportation should remain free and accessible to all. At the same time, promoting climate-friendly transportation aligns with left-wing values of environmental stewardship and reducing carbon emissions to combat climate change, ensuring a healthier and more sustainable future for all."
            },
            {
                "position": "Moderate",
                "answer": "I believe communities and businesses should collaborate to explore possible solutions such as flexible work schedules, carpooling, or telecommuting incentives.",
                "justification": "Moderates typically seek compromise and collaboration to address challenges effectively. In this case, they acknowledge the importance of improving transportation options for both environmental sustainability and the convenience of commuters. By advocating for collaborative efforts involving both businesses and local communities, moderates aim to find practical solutions that address the immediate needs of commuters while also considering long-term sustainability goals."
            },
            {
                "position": "Right",
                "answer": "Political intervention isn't helpful here. Market forces should determine transportation options. Individuals need to choose the environment with their wallets.",
                "justification": "The right-wing perspective stems from a belief in limited government intervention and the importance of individual freedom and personal responsibility. Right-wing individuals often prioritise free market principles and advocate for minimal government interference in economic and social matters. In this context, they argue that individuals should have the freedom to make their own choices regarding transportation without undue government intervention. They believe that market forces, rather than government regulations, should drive innovation and competition in the transportation sector, ultimately leading to more efficient and affordable solutions. Additionally, emphasising personal responsibility aligns with right-wing values of self-reliance and independence, encouraging individuals to take ownership of their transportation needs and make choices that best suit their circumstances."
            }
        ]
    },
    {
        "topic": "Youth Employment",
        "question": "You've just graduated high school and are looking to earn some money before college starts, but the local job market is tough, and opportunities seem scarce. What's your plan of action?",
        "answers": [
            {
                "position": "Left",
                "answer": "I would tap into city or state-funded youth employment programs. They help provide jobs and training to young people like me until my first full-time job.",
                "justification": "A left-leaning approach prioritizes government initiatives aimed at providing equitable job opportunities for youth. It emphasizes the importance of accessible employment support and equal chances."
            },
            {
                "position": "Moderate",
                "answer": "I would check out a combination of job listings from both local government youth programs and private businesses. I could also try volunteering on the side.",
                "justification": "A centrist point of view is more moderate, it utilizes a mix of public resources and private sector jobs while recognizing the value of volunteer work in gaining experience and making connections."
            },
            {
                "position": "Right",
                "answer": "I would start looking for freelance opportunities or start a small business by myself. It’s all about creating your own opportunities and networking.",
                "justification": "A right-leaning stance tends to prioritize minimal government intervention in the economy, suggesting that individuals should take the lead in creating their own opportunities and solving employment challenges."
            }
        ]
    },
    {
        "topic": "Civic Freedom",
        "question": "Your government is thinking about introducing strict requirements to get permits to hold protests, saying it's for safety and order. What's your take?",
        "answers": [
            {
                "position": "Left",
                "answer": "In no way do we need stricter rules to be allowed to speak our minds. In a democracy, it's all about keeping our voice free, not fenced in.",
                "justification": "This leans to the Left, emphasizing the value of unrestricted civic expression and collective action against what's seen as government overreach, advocating for the right to protest freely."
            },
            {
                "position": "Moderate",
                "answer": "There needs to be a middle ground. Getting a permit should be harder, but not prohibitively so. We must ensure our safety without silencing anyone.",
                "justification": "A centrist stance, aiming for a compromise that respects both public safety and the right to protest, suggesting adjustments to the ordinance to keep it reasonable."
            },
            {
                "position": "Right",
                "answer": "Stricter permits would help keep things safe and smooth. Protesting is important, but so is making sure it's done without causing chaos or trouble for others.",
                "justification": "This answer reflects a right-leaning view that prioritizes maintaining order and supports structured processes, including permits for protests. Freedom of expression comes after community safety."
            }
        ]
    },
    {
        "topic": "Civic Freedoms/Affairs",
        "question": "A new law is proposed in your country that requires all bloggers and social media influencers to register with the government for 'national security reasons.' Does this infringe on freedom of expression?",
        "answers": [
            {
                "position": "Left",
                "answer": "Yes. We must protest against the law and sign petitions to discourage it from ever passing.",
                "justification": "From a left-leaning perspective, freedom of expression is a cornerstone of democracy, and any attempt to regulate or monitor it through government registration is seen as an infringement on individual rights. Activism and public dissent are encouraged to protect these freedoms and resist government overreach."
            },
            {
                "position": "Moderate",
                "answer": "Yes, but national security is also important. We need a compromise that protects both individual privacy and our country.",
                "justification": "The moderate approach acknowledges concerns about national security but emphasizes the importance of protecting civic freedoms. It suggests seeking amendments to the law that both safeguard national security and ensure the privacy and freedom of bloggers and influencers, advocating for a balanced solution."
            },
            {
                "position": "Right",
                "answer": "Perhaps, but if it strengthens national security the law should be passed. Only lawbreakers would have anything to fear from it.",
                "justification": "From a right-leaning standpoint, national security is paramount, and measures that help protect the state are considered necessary, even if they require some sacrifices in personal freedoms. The belief here is that such registration could prevent misuse of online platforms, prioritising the country's safety over individual freedoms in digital spaces."
            }
        ]
    },
    {
        "topic": "Technology and Privacy",
        "question": "How do you feel about the fact that many apps require you to agree to provide your data when installing them to use the app properly?",
        "answers": [
            {
                "position": "Left",
                "answer": "I worry about my privacy, data security, and corporate power. I find it exploitative and indecent, as I need to provide my data to stay connected to the world.",
                "justification": "The justification for this left-wing perspective lies in concerns about privacy rights, data security, and corporate accountability. Left-leaning individuals prioritize protecting the rights and autonomy of individuals, including the right to privacy and control over personal data. They argue that the practice of apps requiring users to agree to provide their data often results in a loss of privacy and can potentially lead to exploitation by powerful tech companies. This unequal power dynamic between users and corporations is seen as detrimental to democratic values and social justice."
            },
            {
                "position": "Moderate",
                "answer": "Ideally, users must be given control over their personal information and companies must implement stricter security measures to protect user data.",
                "justification": "The justification for this moderate perspective lies in the recognition of the complexities involved in data collection practices by apps. Moderates understand that while some level of data collection may be necessary for apps to function effectively and provide personalized experiences, it is essential to prioritize user privacy and security. They believe that transparency and informed consent are crucial in ensuring that users have control over how their data is collected and used. By advocating for regulations or guidelines that promote clear disclosure and user control, moderates aim to protect user privacy rights while still allowing for the benefits of digital services."
            },
            {
                "position": "Right",
                "answer": "As long as the consent is clear and made easily accessible, it is legitimate to collect and use user data. No one is forcing us to use these apps.",
                "justification": "The justification for this right-wing perspective is rooted in principles of individual freedom and free market economics. Right-leaning individuals prioritize personal autonomy and voluntary exchange, believing that individuals should have the freedom to make their own choices regarding the apps they use and the data they share. They argue that the requirement for apps to collect user data is a consequence of market forces and reflects the contractual agreement between users and app developers. From this viewpoint, government intervention to regulate or restrict data collection practices would be viewed as unnecessary interference in the free market and potentially harmful to innovation and economic growth."
            }
        ]
    },
    {
        "topic": "Technology and Privacy",
        "question": "Your favorite social media app has just updated its privacy policy, which now includes sharing your data with third-party companies for advertising purposes. Are you concerned about how your data might be used?",
        "answers": [
            {
                "position": "Left",
                "answer": "Absolutely. I will delete the app and campaign for digital privacy reforms.",
                "justification": "In a left-leaning perspective, privacy is a fundamental right. The state should protect individuals from corporate overreach, advocating for strict regulations on data usage and sharing. Collective action aims to reform policies to prioritize user privacy over corporate profit."
            },
            {
                "position": "Moderate",
                "answer": "Slightly. I will adjust my privacy settings, monitor app usage, and update myself on the relevant legislation.",
                "justification": "Taking a middle-ground approach, the idea is to balance convenience with privacy. This stance encourages personal responsibility in managing privacy settings, while also supporting moderate regulatory measures that ensure companies are transparent and accountable in their data practices."
            },
            {
                "position": "Right",
                "answer": "Not at all. I will continue using the app as long as the benefits outweigh my privacy concerns. Targeted advertising is a benefit, after all.",
                "justification": "From a right-leaning viewpoint, market forces should dictate the operations of private companies, including how they use data for advertising. The emphasis is on individual choice, with the assumption that users consent to data sharing in exchange for services provided by the app. It suggests trust in the free market to innovate and provide options to consumers."
            }
        ]
    }
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

onMounted(() => {
    selectedQuestions.value = shuffle(allQuestions).slice(0, 6);
    selectedQuestions.value.forEach(question => {
        shuffledAnswers.value.push(shuffle([...question.answers]));
    });
})

function changeQuestions() {
    justification.value = ''
    hideAnswers.value = false


    if (currentQuestion.value + 1 >= selectedQuestions.value.length) {
        completed.value = true
    } else {
        currentQuestion.value += 1
    }
}

function selectAnswer(answer) {
    if (answer.position === 'Left') {
        politicalScore.value -= 1
    } else if (answer.position === 'Right') {
        politicalScore.value += 1
    } 
    // else if (answer.position === 'Moderate') {
    //     if (politicalScore.value > 0) {
    //         politicalScore.value -= 0.5
    //     } else if (politicalScore.value < 0) {
    //         politicalScore.value += 0.5
    //     }
    // }

    hideAnswers.value = true
    justification.value = answer.justification
}

</script>