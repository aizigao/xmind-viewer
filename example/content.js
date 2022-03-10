const data = [
    // 每一项都是一个 sheet的数据
    {
        id: "859ab2acfc6af8480a310977c7",
        class: "sheet",
        title: "Map 1",
        rootTopic: {
            id: "b9aa22deba98b3b20c7ac8aca2",
            class: "topic",
            title: "Central Topic",
            structureClass: "org.xmind.ui.map.unbalanced",
            titleUnedited: true,
            children: {
                attached: [
                    {
                        id: "b58888b5ceebbf0e68dada0656",
                        title: "Main Topic 1",
                        titleUnedited: true,
                    },
                    {
                        id: "193b56735e689ae86a01d91513",
                        title: "Main Topic 2",
                        titleUnedited: true,
                    },
                    {
                        id: "67ddbcb1-85c9-4478-a0aa-580e9fdcd971",
                        title: "Main Topic 3",
                        titleUnedited: true,
                    },
                ],
            },
            extensions: [
                {
                    content: [{ content: "3", name: "right-number" }],
                    provider: "org.xmind.ui.map.unbalanced",
                },
            ],
        },
        theme: {
            id: "6518e97a4149b5f96691ab3b5d",
            importantTopic: {
                type: "topic",
                properties: {
                    "fo:font-weight": "bold",
                    "fo:color": "#333333",
                    "svg:fill": "#FFFF00",
                },
            },
            minorTopic: {
                type: "topic",
                properties: {
                    "fo:font-weight": "bold",
                    "fo:color": "#333333",
                    "svg:fill": "#FFCB88",
                },
            },
            expiredTopic: {
                type: "topic",
                properties: {
                    "fo:font-style": "italic",
                    "fo:text-decoration": " line-through",
                },
            },
            centralTopic: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:font-weight": "600",
                    "fo:font-style": "normal",
                    "fo:font-size": 28,
                    "shape-class": "org.xmind.topicShape.roundedRect",
                    "svg:fill": "#0288D1",
                    "line-class": "org.xmind.branchConnection.curve",
                    "line-width": "2",
                    "line-color": "#333333",
                    "border-line-width": "0",
                },
                styleId: "9a94e1a0-7e67-48df-a231-7fa0c60b7b97",
                type: "topic",
            },
            boundary: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:color": "#FFFFFF",
                    "fo:font-weight": "500",
                    "svg:fill": "#D5E9FC",
                    "shape-class": "org.xmind.boundaryShape.roundedRect",
                    "line-pattern": "dash",
                    "line-color": "#0288D1",
                    "fo:font-style": "normal",
                    "fo:font-size": 13,
                },
                styleId: "94a6c549-690c-4f1e-b18f-457f114abcb0",
                type: "boundary",
            },
            floatingTopic: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:font-weight": "600",
                    "fo:font-size": 13,
                    "shape-class": "org.xmind.topicShape.roundedRect",
                    "svg:fill": "#333333",
                    "fo:font-style": "normal",
                    "fo:color": "#FFFFFF",
                    "border-line-width": "0",
                    "border-line-color": "none",
                    "line-class": "org.xmind.branchConnection.roundedElbow",
                    "line-width": "1",
                    "line-color": "#333333",
                },
                styleId: "8286b472-0630-4970-8bf1-510a831dc2b9",
                type: "topic",
            },
            subTopic: {
                properties: {
                    "fo:font-weight": "500",
                    "fo:text-align": "left",
                    "fo:font-family": "NeverMind",
                    "line-class": "org.xmind.branchConnection.roundedElbow",
                    "fo:font-style": "normal",
                    "fo:font-size": 13,
                    "fo:color": "#333333",
                    "svg:fill": "none",
                    "shape-class": "org.xmind.topicShape.underline",
                },
                styleId: "ddd92ae3-f2b4-48ee-9e47-2dacee6acac4",
                type: "topic",
            },
            mainTopic: {
                properties: {
                    "fo:font-weight": "600",
                    "fo:font-family": "NeverMind",
                    "fo:font-style": "normal",
                    "fo:font-size": 20,
                    "line-class": "org.xmind.branchConnection.roundedElbow",
                    "line-width": "1",
                    "line-color": "#333333",
                    "border-line-width": "2",
                    "border-line-color": "#333333",
                },
                styleId: "7565fe37-2200-4483-b343-91bdf53e563e",
                type: "topic",
            },
            calloutTopic: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:font-weight": "600",
                    "fo:font-style": "normal",
                    "callout-shape-class":
                        "org.xmind.calloutTopicShape.balloon.roundedRect",
                    "fo:font-size": 13,
                    "fo:color": "#FFFFFF",
                },
                styleId: "9bffcc6a-0526-4db5-b304-ea3830a42846",
                type: "topic",
            },
            summaryTopic: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:font-weight": "600",
                    "fo:font-size": 13,
                    "shape-class": "org.xmind.topicShape.roundedRect",
                    "svg:fill": "#333333",
                    "border-line-width": "1",
                    "border-line-color": "none",
                    "fo:font-style": "normal",
                    "line-class": "org.xmind.branchConnection.roundedElbow",
                    "line-width": "1",
                    "line-color": "#333333",
                },
                styleId: "a82dc72d-29bc-4d81-bd44-3f1bee0ed35c",
                type: "topic",
            },
            relationship: {
                properties: {
                    "fo:font-family": "NeverMind",
                    "fo:font-weight": "normal",
                    "line-color": "#0288D1",
                    "shape-class": "org.xmind.relationshipShape.curved",
                    "line-width": "2",
                    "fo:font-size": 13,
                    "fo:color": "#333333",
                },
                styleId: "1611e291-8cc1-4500-93a5-69281d5bedf0",
                type: "relationship",
            },
            map: {
                type: "map",
                styleId: "7e90467a-d643-4fa9-84f2-f8f0166e5afb",
                properties: {},
            },
            summary: {
                type: "summary",
                styleId: "8aa88864-8667-4627-a763-a84973e0109b",
                properties: {
                    "line-color": "#0288D1",
                    "shape-class": "org.xmind.summaryShape.round",
                    "line-width": "2",
                },
            },
        },
        topicPositioning: "fixed",
    },
];

export default data;
