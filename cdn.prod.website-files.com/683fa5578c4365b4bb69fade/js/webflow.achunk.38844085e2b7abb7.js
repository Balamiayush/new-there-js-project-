(self.webpackChunk = self.webpackChunk || []).push([
    ["786"], {
        38492: function() {
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973bcde4b2
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973bcde4b3
                    },
                    "e-3": {
                        id: "e-3",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-3",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|c7eceac5-2c50-5dbf-025c-f2d9bd53150a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|c7eceac5-2c50-5dbf-025c-f2d9bd53150a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-3-p",
                            smoothing: 92,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 10,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1973c0a00be
                    },
                    "e-4": {
                        id: "e-4",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-4",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|227188c4-8c1b-4fee-38c5-e3baccf6ffea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|227188c4-8c1b-4fee-38c5-e3baccf6ffea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-4-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1974690c9f3
                    },
                    "e-6": {
                        id: "e-6",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-6",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|f6c89486-44af-7606-5a04-50348d973f76",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|f6c89486-44af-7606-5a04-50348d973f76",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-6-p",
                            smoothing: 92,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197469a0eae
                    },
                    "e-7": {
                        id: "e-7",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-7",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|33b4f190-3eb9-04ad-1b9f-9e4b1a8ab4b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|33b4f190-3eb9-04ad-1b9f-9e4b1a8ab4b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-7-p",
                            smoothing: 88,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197469f9741
                    },
                    "e-8": {
                        id: "e-8",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-8",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|1a52f36d-87a0-c5c3-ae23-3add0874d6bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|1a52f36d-87a0-c5c3-ae23-3add0874d6bf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-8-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19746a2aa4f
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-8",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|6be583f8-52f9-1df1-1b06-73704a71267d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|6be583f8-52f9-1df1-1b06-73704a71267d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-8-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19746a3a679
                    },
                    "e-10": {
                        id: "e-10",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-9",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".traditions",
                            originalId: "683fa5578c4365b4bb69faf1|f4a6bc23-2c2e-3ab8-7f73-1bca0900f495",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".traditions",
                            originalId: "683fa5578c4365b4bb69faf1|f4a6bc23-2c2e-3ab8-7f73-1bca0900f495",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-9-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19746a5ac12
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-10",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "39215525-3f6d-cb10-521c-5d55fb2c2b2b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "39215525-3f6d-cb10-521c-5d55fb2c2b2b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-10-p",
                            smoothing: 88,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19746e29820
                    },
                    "e-12": {
                        id: "e-12",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-11",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|dda53ebd-8100-13fa-4346-694eedf9e1e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|dda53ebd-8100-13fa-4346-694eedf9e1e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-11-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197470eb216
                    },
                    "e-13": {
                        id: "e-13",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-14"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button",
                            originalId: "683fa5578c4365b4bb69faf1|4bddfc76-82ce-04e9-ef3b-b10c9bf82ce6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "683fa5578c4365b4bb69faf1|4bddfc76-82ce-04e9-ef3b-b10c9bf82ce6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974717ff69
                    },
                    "e-14": {
                        id: "e-14",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-13"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button",
                            originalId: "683fa5578c4365b4bb69faf1|4bddfc76-82ce-04e9-ef3b-b10c9bf82ce6",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button",
                            originalId: "683fa5578c4365b4bb69faf1|4bddfc76-82ce-04e9-ef3b-b10c9bf82ce6",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974717ff69
                    },
                    "e-15": {
                        id: "e-15",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-14",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|ad668103-da26-8757-0a4e-599a0245cf56",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|ad668103-da26-8757-0a4e-599a0245cf56",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-14-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19747c77fa1
                    },
                    "e-16": {
                        id: "e-16",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "cc6cf5c9-666d-9251-e96b-415d7995de2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cc6cf5c9-666d-9251-e96b-415d7995de2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cdef3e6
                    },
                    "e-17": {
                        id: "e-17",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16"
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "cc6cf5c9-666d-9251-e96b-415d7995de2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "cc6cf5c9-666d-9251-e96b-415d7995de2c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cdef3e6
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844db6fa37eff1cf44dded6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844db6fa37eff1cf44dded6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfe6cf9
                    },
                    "e-19": {
                        id: "e-19",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-18"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844db6fa37eff1cf44dded6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844db6fa37eff1cf44dded6",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfe6cf9
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-21"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844dc068c39cdc31da2de40",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844dc068c39cdc31da2de40",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfe9a50
                    },
                    "e-21": {
                        id: "e-21",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-20"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844dc068c39cdc31da2de40",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844dc068c39cdc31da2de40",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfe9a50
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-23"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844dbb1c42ade07a2f95542",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844dbb1c42ade07a2f95542",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfecb55
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-22"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844dbb1c42ade07a2f95542",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844dbb1c42ade07a2f95542",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974cfecb55
                    },
                    "e-24": {
                        id: "e-24",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-25"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e50df462de4b26971d9d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e50df462de4b26971d9d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d1eaaa3
                    },
                    "e-25": {
                        id: "e-25",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e50df462de4b26971d9d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e50df462de4b26971d9d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d1eaaa3
                    },
                    "e-26": {
                        id: "e-26",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-27"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e53134eee4f54e47dac2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e53134eee4f54e47dac2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d1f389f
                    },
                    "e-27": {
                        id: "e-27",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-26"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e53134eee4f54e47dac2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e53134eee4f54e47dac2",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d1f389f
                    },
                    "e-28": {
                        id: "e-28",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_UP",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-29"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d22549e
                    },
                    "e-29": {
                        id: "e-29",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_SCROLL_DOWN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-28"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974d22549e
                    },
                    "e-30": {
                        id: "e-30",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-17",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|c7eceac5-2c50-5dbf-025c-f2d9bd53150a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|c7eceac5-2c50-5dbf-025c-f2d9bd53150a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-17-p",
                            smoothing: 92,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1974f3ef99c
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-32"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|dd556b73-1bef-ee45-45c3-670428476139",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|dd556b73-1bef-ee45-45c3-670428476139",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197523e8c44
                    },
                    "e-33": {
                        id: "e-33",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-19",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-34"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|30e46c97-d95b-85f3-97a9-d89b0d716bea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|30e46c97-d95b-85f3-97a9-d89b0d716bea",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19752411a83
                    },
                    "e-37": {
                        id: "e-37",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-38"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844db6fa37eff1cf44dded6|0d85878d-e5f2-cb58-05c6-720f2a78eb29",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844db6fa37eff1cf44dded6|0d85878d-e5f2-cb58-05c6-720f2a78eb29",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197597a42db
                    },
                    "e-39": {
                        id: "e-39",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-20",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-40"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".recipe_card",
                            originalId: "6844db6fa37eff1cf44dded6|a7f09190-ff00-9d18-fd27-8e53e62a7b4a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".recipe_card",
                            originalId: "6844db6fa37eff1cf44dded6|a7f09190-ff00-9d18-fd27-8e53e62a7b4a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975984c4e8
                    },
                    "e-41": {
                        id: "e-41",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-23",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|8f3b68c7-7c09-6940-c1a0-26299c7e1ddd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|8f3b68c7-7c09-6940-c1a0-26299c7e1ddd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-23-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1976c0dd614
                    },
                    "e-43": {
                        id: "e-43",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-25",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|8994fdd0-125d-1f8a-f982-f64cb73b1277",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|8994fdd0-125d-1f8a-f982-f64cb73b1277",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-25-p",
                            smoothing: 88,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1976c211413
                    },
                    "e-44": {
                        id: "e-44",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-45"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683fa5578c4365b4bb69faf1|f17341b7-ca71-fe12-3042-fe124e74ea43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683fa5578c4365b4bb69faf1|f17341b7-ca71-fe12-3042-fe124e74ea43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1976f991cf2
                    },
                    "e-46": {
                        id: "e-46",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-26",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-26-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1977305827e
                    },
                    "e-47": {
                        id: "e-47",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-27",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-27-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19773084c60
                    },
                    "e-48": {
                        id: "e-48",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-26",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|71ef07e0-788b-4621-cd0a-8c8977311f7a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|71ef07e0-788b-4621-cd0a-8c8977311f7a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-26-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19773091dfb
                    },
                    "e-49": {
                        id: "e-49",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-27",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|52e1dddf-0a3d-3a59-e347-05ebdc8f6091",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|52e1dddf-0a3d-3a59-e347-05ebdc8f6091",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-27-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197730932ba
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-26",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|d8a34208-b734-be81-c246-f988ae7ca6f6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|d8a34208-b734-be81-c246-f988ae7ca6f6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-26-p",
                            smoothing: 88,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197730970af
                    },
                    "e-51": {
                        id: "e-51",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-28",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6844e5e348c5f9f0a72977ee|565e3af9-861b-ca59-8722-95cb6c3de555",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6844e5e348c5f9f0a72977ee|565e3af9-861b-ca59-8722-95cb6c3de555",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-28-p",
                            smoothing: 88,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1977932a76f
                    },
                    "e-52": {
                        id: "e-52",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "34d702f3-502d-3862-1651-a0ffcd46a00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "34d702f3-502d-3862-1651-a0ffcd46a00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19788b7483f
                    },
                    "e-53": {
                        id: "e-53",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-52"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "34d702f3-502d-3862-1651-a0ffcd46a00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "34d702f3-502d-3862-1651-a0ffcd46a00f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19788b74840
                    }
                },
                actionLists: {
                    "a-2": {
                        id: "a-2",
                        title: "Header (Show)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-2-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.725, .007, .333, .995],
                                    duration: 700,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["ab18e40a-0ce7-a35e-b95f-2cae940be2be"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1973bcdf02f
                    },
                    a: {
                        id: "a",
                        title: "Header (Hide)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.725, .007, .333, .995],
                                    duration: 700,
                                    target: {
                                        selector: ".header",
                                        selectorGuids: ["ab18e40a-0ce7-a35e-b95f-2cae940be2be"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1973bcdf02f
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Jar-Scroll (Desktop)",
                        continuousParameterGroups: [{
                            id: "a-3-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-3-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.5,
                                        yValue: 1.5,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-3-n",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 0
                                    }
                                }, {
                                    id: "a-3-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 20,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-3-n-2",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 45
                                    }
                                }, {
                                    id: "a-3-n-6",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.4,
                                        yValue: 1.4,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-3-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-3-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-3-n-12",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 70,
                                actionItems: [{
                                    id: "a-3-n-8",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 70
                                    }
                                }, {
                                    id: "a-3-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 3,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-3-n-13",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-3-n-9",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.54,
                                        yValue: 1.54,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-3-n-7",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 99
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1973c0a09bf
                    },
                    "a-4": {
                        id: "a-4",
                        title: "Icons (Scroll)",
                        continuousParameterGroups: [{
                            id: "a-4-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-4-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        yValue: -250,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        xValue: .8,
                                        yValue: .8,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-4-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-4-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1974690d223
                    },
                    "a-6": {
                        id: "a-6",
                        title: "Jar Hide",
                        continuousParameterGroups: [{
                            id: "a-6-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-6-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.54,
                                        yValue: 1.54,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-6-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-6-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-6-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 0,
                                        yValue: 0,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-6-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-6-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        zValue: -25,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197469a1e10
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Whats Inside (On Scroll)",
                        continuousParameterGroups: [{
                            id: "a-7-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-7-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".flex_inside",
                                            selectorGuids: ["70fc93a6-e6b0-cd38-1637-63d989dbebf3"]
                                        },
                                        xValue: 50,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-7-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".flex_inside",
                                            selectorGuids: ["70fc93a6-e6b0-cd38-1637-63d989dbebf3"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197469f9ec7
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Parallax Image",
                        continuousParameterGroups: [{
                            id: "a-8-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-8-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-8-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: -5,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-8-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19746a2b29e
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Tradition",
                        continuousParameterGroups: [{
                            id: "a-9-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-9-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".item_tradition",
                                            selectorGuids: ["431b33ed-b860-53c2-2e39-fe032752fdaf"]
                                        },
                                        xValue: .9,
                                        yValue: .9,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-9-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".item_tradition",
                                            selectorGuids: ["431b33ed-b860-53c2-2e39-fe032752fdaf"]
                                        },
                                        zValue: 8,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-9-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".item_tradition",
                                            selectorGuids: ["431b33ed-b860-53c2-2e39-fe032752fdaf"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-9-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".item_tradition",
                                            selectorGuids: ["431b33ed-b860-53c2-2e39-fe032752fdaf"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19746a5b576
                    },
                    "a-10": {
                        id: "a-10",
                        title: "Parallax Image",
                        continuousParameterGroups: [{
                            id: "a-10-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-10-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: null,
                                        yValue: 0,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-10-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: null,
                                        yValue: 10,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19746a2b29e
                    },
                    "a-11": {
                        id: "a-11",
                        title: "Tags (On scroll)",
                        continuousParameterGroups: [{
                            id: "a-11-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-11-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ff",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "9aaf4703-64a8-5457-9f27-893510648a4b"]
                                        },
                                        zValue: 17,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ff",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "9aaf4703-64a8-5457-9f27-893510648a4b"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-11-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ss",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "a98208c4-0dc3-7697-f51d-7346a3f980c5"]
                                        },
                                        zValue: -17,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ss",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "a98208c4-0dc3-7697-f51d-7346a3f980c5"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-11-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.tt",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "d4e73b4d-c92d-88bb-a357-46ace7a3c7b3"]
                                        },
                                        zValue: 30,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.tt",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "d4e73b4d-c92d-88bb-a357-46ace7a3c7b3"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 65,
                                actionItems: [{
                                    id: "a-11-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ff",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "9aaf4703-64a8-5457-9f27-893510648a4b"]
                                        },
                                        zValue: -7,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ss",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "a98208c4-0dc3-7697-f51d-7346a3f980c5"]
                                        },
                                        zValue: 8,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.tt",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "d4e73b4d-c92d-88bb-a357-46ace7a3c7b3"]
                                        },
                                        zValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-11-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ff",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "9aaf4703-64a8-5457-9f27-893510648a4b"]
                                        },
                                        yValue: -400,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-11-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.ss",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "a98208c4-0dc3-7697-f51d-7346a3f980c5"]
                                        },
                                        yValue: 400,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-11-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".tag_one.tt",
                                            selectorGuids: ["57c94a21-94ef-d4cc-861e-bfde55c68112", "d4e73b4d-c92d-88bb-a357-46ace7a3c7b3"]
                                        },
                                        yValue: -800,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197470eb9fb
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Mouse Hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-12-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".back_color_button",
                                        selectorGuids: ["1f9cb425-32fc-4d92-50db-6ca39d5ed5b7"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-12-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.713, .001, .222, 1.001],
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".back_color_button",
                                        selectorGuids: ["1f9cb425-32fc-4d92-50db-6ca39d5ed5b7"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-12-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 450,
                                    target: {
                                        selector: ".button",
                                        selectorGuids: ["0fd5c41b-8207-4536-d98d-45d9a382fd9c"]
                                    },
                                    globalSwatchId: "--primary",
                                    rValue: 247,
                                    bValue: 50,
                                    gValue: 172,
                                    aValue: 1
                                }
                            }, {
                                id: "a-12-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.632, .012, .339, .989],
                                    duration: 600,
                                    target: {
                                        selector: ".button",
                                        selectorGuids: ["0fd5c41b-8207-4536-d98d-45d9a382fd9c"]
                                    },
                                    globalSwatchId: "--dark-brown",
                                    rValue: 64,
                                    bValue: 17,
                                    gValue: 32,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19747181598
                    },
                    "a-13": {
                        id: "a-13",
                        title: "Mouse Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-13-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.713, .007, .275, 1.001],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".back_color_button",
                                        selectorGuids: ["1f9cb425-32fc-4d92-50db-6ca39d5ed5b7"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-13-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 350,
                                    target: {
                                        selector: ".button",
                                        selectorGuids: ["0fd5c41b-8207-4536-d98d-45d9a382fd9c"]
                                    },
                                    globalSwatchId: "--dark-brown",
                                    rValue: 64,
                                    bValue: 17,
                                    gValue: 32,
                                    aValue: 1
                                }
                            }, {
                                id: "a-13-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: [.632, .012, .339, .989],
                                    duration: 500,
                                    target: {
                                        selector: ".button",
                                        selectorGuids: ["0fd5c41b-8207-4536-d98d-45d9a382fd9c"]
                                    },
                                    globalSwatchId: "--primary",
                                    rValue: 247,
                                    bValue: 50,
                                    gValue: 172,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19747181598
                    },
                    "a-14": {
                        id: "a-14",
                        title: "Icon Rotate",
                        continuousParameterGroups: [{
                            id: "a-14-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-14-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        zValue: 50,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-14-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".circle_highlight",
                                            selectorGuids: ["953c5147-3536-418d-fb17-23e1f3aa5a0c"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19747c787a5
                    },
                    "a-15": {
                        id: "a-15",
                        title: "Menu Open (In)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.close",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "2c0c7af4-4430-ebdb-1c7c-9a64fe10657f"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-15-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.open",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "d47905b6-b303-0a72-9242-367e7d15757b"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-15-n-9",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-15-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.684, .007, .327, 1.001],
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.first",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "d3a44d9f-a9a5-ed26-5f2f-d3c9f81807f3"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-15-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.661, .001, .345, 1.001],
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.second",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "32a8d732-347d-380d-ac4d-f8eeec2888b8"]
                                    },
                                    zValue: -45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-15-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.second",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "32a8d732-347d-380d-ac4d-f8eeec2888b8"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.first",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "d3a44d9f-a9a5-ed26-5f2f-d3c9f81807f3"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.close",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "2c0c7af4-4430-ebdb-1c7c-9a64fe10657f"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-15-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.open",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "d47905b6-b303-0a72-9242-367e7d15757b"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-15-n-11",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-15-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.69, .007, .316, .995],
                                    duration: 850,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 650,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1974cdefa83
                    },
                    "a-16": {
                        id: "a-16",
                        title: "Menu Open (Out)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-16-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.684, .007, .327, 1.001],
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.first",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "d3a44d9f-a9a5-ed26-5f2f-d3c9f81807f3"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-16-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.661, .001, .345, 1.001],
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.second",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "32a8d732-347d-380d-ac4d-f8eeec2888b8"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-16-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.second",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "32a8d732-347d-380d-ac4d-f8eeec2888b8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-16-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".line.first",
                                        selectorGuids: ["b619bb29-2fa2-3667-52fa-2e1ca6fe0de6", "d3a44d9f-a9a5-ed26-5f2f-d3c9f81807f3"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-16-n-10",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.close",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "2c0c7af4-4430-ebdb-1c7c-9a64fe10657f"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-16-n-11",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_txt.open",
                                        selectorGuids: ["b21d7278-93c1-b664-2d2a-bd0e87e1c751", "d47905b6-b303-0a72-9242-367e7d15757b"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-16-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.69, .007, .316, .995],
                                    duration: 850,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-16-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 650,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-16-n-12",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 650,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".mobile_menu",
                                        selectorGuids: ["b127a03e-4fdb-723d-2877-5dd9b22f8c09"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1974cdefa83
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Jar-Scroll (Mobile)",
                        continuousParameterGroups: [{
                            id: "a-17-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-17-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-17-n-2",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 0
                                    }
                                }, {
                                    id: "a-17-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-17-n-4",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 45
                                    }
                                }, {
                                    id: "a-17-n-5",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.4,
                                        yValue: 1.4,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-17-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-17-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-17-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-17-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 55,
                                actionItems: [{
                                    id: "a-17-n-16",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 75
                                    }
                                }]
                            }, {
                                keyframe: 70,
                                actionItems: [{
                                    id: "a-17-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        yValue: 3,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-17-n-11",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        zValue: -10,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-17-n-12",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        xValue: 1.5,
                                        yValue: 1.5,
                                        locked: !0
                                    }
                                }, {
                                    id: "a-17-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".box_motion",
                                            selectorGuids: ["2f05d328-8119-0948-3d1b-d467c9839eff"]
                                        },
                                        yValue: 24,
                                        xUnit: "PX",
                                        yUnit: "em",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-17-n-13",
                                    actionTypeId: "PLUGIN_LOTTIE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".j_p",
                                            selectorGuids: ["b008a333-9521-c3f1-546f-fa211e7f140d"]
                                        },
                                        value: 99
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1973c0a09bf
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Modal (Open)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-18-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-18-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-18-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-18-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-18-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.702, .007, .298, 1.001],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.702, .007, .298, 1.001],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197523e9452
                    },
                    "a-19": {
                        id: "a-19",
                        title: "Modal (Close)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-19-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.702, .007, .298, 1.001],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-19-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.702, .007, .298, 1.001],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box",
                                        selectorGuids: ["8a613792-d823-df42-5aea-e1dff51ed495"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 750,
                                    easing: "easeOut",
                                    duration: 400,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-19-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".modal_window",
                                        selectorGuids: ["f697af2a-cff8-c0be-54cb-fb9c65e0506b"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197523e9452
                    },
                    "a-21": {
                        id: "a-21",
                        title: "Recipe (Close)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-21-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.696, .001, .281, .995],
                                    duration: 800,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-21-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.684, .007, .316, 1.001],
                                    duration: 800,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: 115,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-21-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 800,
                                    easing: "easeOut",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1100,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1975780cc3d
                    },
                    "a-20": {
                        id: "a-20",
                        title: "Recipe (Open)",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-20-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-20-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: 115,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-20-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-20-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 450,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".modal_recipes",
                                        selectorGuids: ["8cacaba7-05c4-a7db-1696-9ec9c6cde47a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.684, .007, .316, 1.001],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: [.696, .001, .281, .995],
                                    duration: 900,
                                    target: {
                                        selector: ".modal_box_recipe",
                                        selectorGuids: ["4714ea0d-550e-ccfd-7a0e-bf31644291db"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975780cc3d
                    },
                    "a-23": {
                        id: "a-23",
                        title: "Parallax Image 2",
                        continuousParameterGroups: [{
                            id: "a-23-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-23-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: null,
                                        yValue: -5,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-23-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: null,
                                        yValue: 5,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-23-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image",
                                            selectorGuids: ["db29ae94-abd7-f2db-bbf0-c8b7b547d0c8"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19746a2b29e
                    },
                    "a-25": {
                        id: "a-25",
                        title: "Parallax (Hero About)",
                        continuousParameterGroups: [{
                            id: "a-25-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-25-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|8994fdd0-125d-1f8a-f982-f64cb73b1277"
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-25-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|8994fdd0-125d-1f8a-f982-f64cb73b1277"
                                        },
                                        yValue: 4,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1976c2128da
                    },
                    "a-26": {
                        id: "a-26",
                        title: "Cards (On Scroll) 1-3-5",
                        continuousParameterGroups: [{
                            id: "a-26-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-26-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956"
                                        },
                                        zValue: 5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-26-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956"
                                        },
                                        xValue: .85,
                                        yValue: .85,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 80,
                                actionItems: [{
                                    id: "a-26-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956"
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-26-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|85e89e46-f5ca-741c-7a49-f8a927b42956"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19773059168
                    },
                    "a-27": {
                        id: "a-27",
                        title: "Cards (On Scroll) 2-4",
                        continuousParameterGroups: [{
                            id: "a-27-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 15,
                                actionItems: [{
                                    id: "a-27-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256"
                                        },
                                        zValue: -5,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-27-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256"
                                        },
                                        xValue: .85,
                                        yValue: .85,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 80,
                                actionItems: [{
                                    id: "a-27-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256"
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-27-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "6844e5e348c5f9f0a72977ee|98598242-b0a4-c579-d00a-f9fdaac17256"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19773059168
                    },
                    "a-28": {
                        id: "a-28",
                        title: "Spoon Scroll",
                        continuousParameterGroups: [{
                            id: "a-28-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-28-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".spoon_above",
                                            selectorGuids: ["8cfbd49a-6e02-6bb7-66e7-2ab4fe27cf52"]
                                        },
                                        xValue: .85,
                                        yValue: .85,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-28-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".spoon_above",
                                            selectorGuids: ["8cfbd49a-6e02-6bb7-66e7-2ab4fe27cf52"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1977932aec5
                    },
                    "a-29": {
                        id: "a-29",
                        title: "Modals Hide",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-29-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 600,
                                    target: {
                                        selector: ".fixed_icons",
                                        selectorGuids: ["79f704c5-392e-fe82-d811-d0f9410e3e67"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19788b75761
                    },
                    "a-30": {
                        id: "a-30",
                        title: "Modals Unhide",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-30-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 600,
                                    target: {
                                        selector: ".fixed_icons",
                                        selectorGuids: ["79f704c5-392e-fe82-d811-d0f9410e3e67"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19788b75761
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), Webflow.require("commerce") && Webflow.require("commerce").init({
                siteId: "683fa5578c4365b4bb69fade",
                apiUrl: "https://render.webflow.com"
            })
        }
    }
]);