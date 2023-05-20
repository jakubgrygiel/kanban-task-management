enum UpdateEnum {
  ADD = "add",
  UPDATE = "update",
  DELETE = "delete",
}

type UpdateType = UpdateEnum.ADD | UpdateEnum.UPDATE | UpdateEnum.DELETE;

interface IData {
  boards: IBoard[];
}

interface IBoard {
  title: string;
  id: string;
  isActive: boolean;
  columns: IColumn[];
}

interface IColumn {
  title: string;
  id: string;
  tasks: ITask[];
}

interface ITask {
  title: string;
  id: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}

interface ISubtask {
  title: string;
  id: string;
  isCompleted: boolean;
}

interface IBoardValidation {
  title: boolean;
  columns: IColumnValidation[];
}

interface IColumnValidation {
  title: boolean;
  id: string;
}

interface ITaskValidation {
  title: boolean;
  description: boolean;
  status: boolean;
  subtasks: ISubtaskValidation[];
}

interface ISubtaskValidation {
  title: boolean;
  id: string;
}

const initialEmptyBoard: IBoard = {
  title: "",
  id: "",
  isActive: false,
  columns: [
    {
      title: "Todo",
      id: "",
      tasks: [],
    },
    {
      title: "Doing",
      id: "",
      tasks: [],
    },
  ],
};

const initialEmptyColumn: IColumn = {
  title: "",
  id: "",
  tasks: [],
};

const initialEmptyTask: ITask = {
  title: "",
  id: "",
  description: "",
  status: "",
  subtasks: [],
};

const initialEmptySubtask: ISubtask = {
  id: "",
  title: "",
  isCompleted: false,
};

const initialData: IData = {
  boards: [
    {
      title: "Platform Launch",
      id: "a75hunefo5ljl7wmeii5pelc",
      isActive: true,
      columns: [
        {
          title: "Todo",
          id: "grzbuj9m2ptpkkr0qkoi48py",
          tasks: [
            {
              title: "Build UI for onboarding flow",
              id: "ddchro62dmsiyizni3abkns7",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "mtixy1ap5fon7i7r8j1gp4ls",
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  id: "dbxfs30s1jw0ypliaiyt6vfs",
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  id: "fnnv15opc1micgr635rxm939",
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build UI for search",
              id: "xxvcubbuysd1j9fijogsbyf8",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "fda67j0kjl2k93sgbid27gy5",
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Build settings UI",
              id: "gq8e4urmk3l7b8ue4hcer1fh",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "x2gyowhgifw6o70wekhsucb3",
                  title: "Account page",
                  isCompleted: false,
                },
                {
                  id: "tebi76wj3g89q7g146l2zr8j",
                  title: "Billing page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "QA and test all major user journeys",
              id: "oz2tih3vt0pn72wcqgdp0p6c",
              description:
                "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
              status: "Todo",
              subtasks: [
                {
                  id: "s3t90ffxb2ve61zamywi5lhx",
                  title: "Internal testing",
                  isCompleted: false,
                },
                {
                  id: "u986zw5cpyb4w1mrh47btwwo",
                  title: "External testing",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          title: "Doing",
          id: "tldg4yplg97norozi24hy0c8",
          tasks: [
            {
              title: "Design settings and search pages",
              id: "xf6hsdzukxsbzxhhmjzfoy16",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "kc1h7qf6wuk33yfq5nnp3q1q",
                  title: "Settings - Account page",
                  isCompleted: true,
                },
                {
                  id: "aysxts6vwmlqifrybm0b9llf",
                  title: "Settings - Billing page",
                  isCompleted: true,
                },
                {
                  id: "hxt1bpb2h6b40551ke32aeua",
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add account management endpoints",
              id: "xl3tsztq7xhtwc4tcr4xv1zf",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "ju6vr6hal0ge261ql7evh41q",
                  title: "Upgrade plan",
                  isCompleted: true,
                },
                {
                  id: "kh8egbath1nstvaqkba1hhdq",
                  title: "Cancel plan",
                  isCompleted: true,
                },
                {
                  id: "yfj9grxmpc3pnilt9m41gn00",
                  title: "Update payment method",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Design onboarding flow",
              id: "zqjnxhb3pymtjf2yhauaa4zs",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "iwfy0scs0fjw94dpzkpy7nv0",
                  title: "Sign up page",
                  isCompleted: true,
                },
                {
                  id: "u44ikixynx6jn7pj7i7hqfny",
                  title: "Sign in page",
                  isCompleted: false,
                },
                {
                  id: "wa1j12dy9f9glyx53mibwi6n",
                  title: "Welcome page",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add search enpoints",
              id: "ibfjbf5ml2povlqai4mfadj8",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "y26jfp13fbixm5mr1otygz8s",
                  title: "Add search endpoint",
                  isCompleted: true,
                },
                {
                  id: "svrwql061o9fo2ha9vij2jak",
                  title: "Define search filters",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Add authentication endpoints",
              id: "naoq62ov2jobrn1594b7vu1h",
              description: "",
              status: "Doing",
              subtasks: [
                {
                  id: "cnkoyudwjlr2stfk0fm5743b",
                  title: "Define user model",
                  isCompleted: true,
                },
                {
                  id: "d14r38vc7o9r0ttbojamnrn8",
                  title: "Add auth endpoints",
                  isCompleted: false,
                },
              ],
            },
            {
              title:
                "Research pricing points of various competitors and trial different business models",
              id: "f0fmsdpbjlju2rpbrgbsw0aq",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: "Doing",
              subtasks: [
                {
                  id: "aoh2n7dm9zp9e0gu77r12iyb",
                  title: "Research competitor pricing and business models",
                  isCompleted: true,
                },
                {
                  id: "woteg36hds74izcsrg78ybyz",
                  title: "Outline a business model that works for our solution",
                  isCompleted: false,
                },
                {
                  id: "spirbhf38tjqtbeim638ht1w",
                  title:
                    "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          title: "Done",
          id: "dofu8emmzyncwk9q1gfm0wiq",
          tasks: [
            {
              title: "Conduct 5 wireframe tests",
              id: "saejpxhca70rh2qj0r0bprhb",
              description:
                "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
              status: "Done",
              subtasks: [
                {
                  id: "gjnmff02eqoktft91uaq9uwo",
                  title: "Complete 5 wireframe prototype tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Create wireframe prototype",
              id: "y7gz2kkfgsbs7dp5fpvp2hw6",
              description:
                "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
              status: "Done",
              subtasks: [
                {
                  id: "nrjt87ppo91ic1po2kglynq9",
                  title: "Create clickable wireframe prototype in Balsamiq",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Review results of usability tests and iterate",
              id: "x9qlsdk9d9t3x3gyqdzi3qri",
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: "Done",
              subtasks: [
                {
                  id: "jtsm6mr0b0e0rc0cj0gbem8b",
                  title:
                    "Meet to review notes from previous tests and plan changes",
                  isCompleted: true,
                },
                {
                  id: "dhpuokbzp1jmhf6vvi8cscex",
                  title: "Make changes to paper prototypes",
                  isCompleted: true,
                },
                {
                  id: "ofzm3k5p2dkpd0e4wfikbnrz",
                  title: "Conduct 5 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title:
                "Create paper prototypes and conduct 10 usability tests with potential customers",
              id: "ogfu1lwdyv2ahh1pwvyc3vp2",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "epzzqj57t4x9fmvhk598zaj6",
                  title: "Create paper prototypes for version one",
                  isCompleted: true,
                },
                {
                  id: "u35vimuggmbz46lj93lqi0zp",
                  title: "Complete 10 usability tests",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Market discovery",
              id: "kulpg19xqhm62nf9tmba0x1i",
              description:
                "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
              status: "Done",
              subtasks: [
                {
                  id: "ool595busn04atjk21qlerlr",
                  title: "Interview 10 prospective customers",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Competitor analysis",
              id: "d9krcsy1f0dvl9f959zoijvz",
              description: "",
              status: "Done",
              subtasks: [
                {
                  id: "f7cv5ymjua1b0pvm9mh6u96z",
                  title: "Find direct and indirect competitors",
                  isCompleted: true,
                },
                {
                  id: "be85h2piycejapuvfda86g39",
                  title: "SWOT analysis for each competitor",
                  isCompleted: true,
                },
              ],
            },
            {
              title: "Research the market",
              id: "ai8dgxxul62ymtxttz513gj4",
              description:
                "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
              status: "Done",
              subtasks: [
                {
                  id: "y4ocdw6qru572jefrezsnbxz",
                  title: "Write up research analysis",
                  isCompleted: true,
                },
                {
                  id: "v9r5kocknhtty0ra1gzkjgib",
                  title: "Calculate TAM",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Marketing Plan",
      id: "rqzr411q1otqabyc53pkhvdg",
      isActive: false,
      columns: [
        {
          title: "Todo",
          id: "qq6is4yqjgtpcrarjr3gudat",
          tasks: [
            {
              title: "Plan Product Hunt launch",
              id: "e8bxdv0uhhft7ekdy2sn0c96",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Find hunter",
                  id: "xiaa85oilxktq4okalk8trfe",
                  isCompleted: false,
                },
                {
                  title: "Gather assets",
                  id: "wbtfes5p64mwx96us6yyz640",
                  isCompleted: false,
                },
                {
                  title: "Draft product page",
                  id: "u9cjx4ui3odu7q9on1bkwduo",
                  isCompleted: false,
                },
                {
                  title: "Notify customers",
                  id: "ftsszy07za03jraq62qj42zg",
                  isCompleted: false,
                },
                {
                  title: "Notify network",
                  id: "qovhtwgu6k30uuu1ncz5esqg",
                  isCompleted: false,
                },
                {
                  title: "Launch!",
                  id: "mvwbz6rvnairw8rpfltnckv6",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Share on Show HN",
              id: "ajouqrypgicr1ilvpo4hrtz1",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "idxcupxeb9c4kzk1ml2r1t34",
                  title: "Draft out HN post",
                  isCompleted: false,
                },
                {
                  id: "fn8xciw1vil12473zg8qvcns",
                  title: "Get feedback and refine",
                  isCompleted: false,
                },
                {
                  id: "cd3q9utml33pol4m56zt8wk3",
                  title: "Publish post",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Write launch article to publish on multiple channels",
              id: "apval72paycf4kv61f8zkc2u",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  id: "idfroygnavixl97or141ie0h",
                  title: "Write article",
                  isCompleted: false,
                },
                {
                  id: "puflkzz3rsl318rkwuhru16l",
                  title: "Publish on LinkedIn",
                  isCompleted: false,
                },
                {
                  id: "elqd4ypes4ycitmknar43s4c",
                  title: "Publish on Inndie Hackers",
                  isCompleted: false,
                },
                {
                  id: "ez2txiicd1eco0jc475p50v5",
                  title: "Publish on Medium",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          title: "Doing",
          id: "f2pob21jmg5b03119mzbougf",
          tasks: [],
        },
        {
          title: "Done",
          id: "cl81hah9pbogore119b5t1e4",
          tasks: [],
        },
      ],
    },
    {
      title: "Roadmap",
      id: "wje5u6hhrzue1bh9lql12s0i",
      isActive: false,
      columns: [
        {
          title: "Now",
          id: "x1pcqenx35kht9zhggzcwwov",
          tasks: [
            {
              title: "Launch version one",
              id: "dxy3m0qp659nzew07rvzcx0z",
              description: "",
              status: "Now",
              subtasks: [
                {
                  id: "mbwsm148wdvypeajccf223m4",
                  title: "Launch privately to our waitlist",
                  isCompleted: false,
                },
                {
                  id: "u05j5koa996me4skf0xtemup",
                  title: "Launch publicly on PH, HN, etc.",
                  isCompleted: false,
                },
              ],
            },
            {
              title: "Review early feedback and plan next steps for roadmap",
              id: "etl38fj34uz6cdzexmhub0rm",
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: "Now",
              subtasks: [
                {
                  id: "et42a8f7ib6pwcs3lhwdgst1",
                  title: "Interview 10 customers",
                  isCompleted: false,
                },
                {
                  id: "v7eeo11zobghj1tgip1zffmi",
                  title: "Review common customer pain points and suggestions",
                  isCompleted: false,
                },
                {
                  id: "tzxk5t30pcd7cdk58a5wg7vd",
                  title: "Outline next steps for our roadmap",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          title: "Next",
          id: "yg28xc1wdvkzr3wncsx4qumk",
          tasks: [],
        },
        {
          title: "Later",
          id: "l2mty46vzl9ftfd09gvcbr3t",
          tasks: [],
        },
      ],
    },
  ],
};

export default initialData;

export {
  UpdateEnum,
  initialEmptySubtask,
  initialEmptyTask,
  initialEmptyBoard,
  initialEmptyColumn,
};
export type {
  UpdateType,
  IData,
  IBoard,
  IColumn,
  ITask,
  ISubtask,
  IBoardValidation,
  IColumnValidation,
  ITaskValidation,
  ISubtaskValidation,
};
