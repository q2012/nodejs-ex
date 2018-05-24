console.log(new Date().getHours());

{
    "interactionModel": {
        "languageModel": {
            "invocationName": "color picker",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "MyColorIsIntent",
                    "slots": [
                        {
                            "name": "Color",
                            "type": "LIST_OF_COLORS"
                        }
                    ],
                    "samples": [
                        "my favorite color is {Color}"
                    ]
                },
                {
                    "name": "WhatsMyColorIntent",
                    "slots": [],
                    "samples": [
                        "what's my favorite color",
                        "what is my favorite color",
                        "what's my color",
                        "what is my color",
                        "my color",
                        "my favorite color",
                        "get my color",
                        "get my favorite color",
                        "give me my favorite color",
                        "give me my color",
                        "what my color is",
                        "what my favorite color is",
                        "yes",
                        "yup",
                        "sure",
                        "yes please"
                    ]
                },
                {
                    "name": "OpenLockIntent",
                    "slots": [
                        {
                            "name": "LockName",
                            "type": "LIST_OF_LOCKNAMES"
                        },
                        {
                            "name": "HubName",
                            "type": "LIST_OF_HUBNAMES"
                        }
                        ],
                    "samples": [
                        "open the {LockName} lock of {HubName} hub",
                        "open the {LockName} lock in {HubName} hub",
                        "please open the {LockName} lock of {HubName} hub",
                        "please open the {LockName} lock in {HubName} hub",
                        "open the {LockName} lock of {HubName} hub please",
                        "open the {LockName} lock in {HubName} hub please",
                        "open {LockName} lock of {HubName} hub please",
                        "open {LockName} lock in {HubName} hub please",
                        "open {LockName} lock of {HubName} hub",
                        "open {LockName} lock in {HubName} hub",
                        "please open {LockName} lock of {HubName} hub",
                        "please open {LockName} lock in {HubName} hub"
                    ]
                },
                {
                    "name": "CloseLockIntent",
                    "slots": [
                        {
                            "name": "LockName",
                            "type": "LIST_OF_LOCKNAMES"
                        },
                        {
                            "name": "HubName",
                            "type": "LIST_OF_HUBNAMES"
                        }
                        ],
                    "samples": [
                        "close the {LockName} lock of {HubName} hub",
                        "close the {LockName} lock in {HubName} hub",
                        "please close the {LockName} lock of {HubName} hub",
                        "please close the {LockName} lock in {HubName} hub",
                        "close the {LockName} lock of {HubName} hub please",
                        "close the {LockName} lock in {HubName} hub please",
                        "close {LockName} lock of {HubName} hub please",
                        "close {LockName} lock in {HubName} hub please",
                        "close {LockName} lock of {HubName} hub",
                        "close {LockName} lock in {HubName} hub",
                        "please close {LockName} lock of {HubName} hub",
                        "please close {LockName} lock in {HubName} hub"
                    ]
                },
                {
                    "name": "IsLockedIntent",
                    "slots": [
                        {
                            "name": "LockName",
                            "type": "LIST_OF_LOCKNAMES"
                        },
                        {
                            "name": "HubName",
                            "type": "LIST_OF_HUBNAMES"
                        }
                        ],
                    "samples": [
                        "is {LockName} lock in {HubName} hub locked",
                        "is {LockName} lock in {HubName} hub opened",
                        "is {LockName} lock in {HubName} hub closed",
                        "is {LockName} lock of {HubName} hub locked",
                        "is {LockName} lock of {HubName} hub opened",
                        "is {LockName} lock of {HubName} hub closed",
                        "{LockName} lock of {HubName} hub state",
                        "{LockName} lock in {HubName} hub state",
                        "did you close the {LockName} lock in {HubName} hub",
                        "did you close the {LockName} lock of {HubName} hub",
                        "did you open the {LockName} lock in {HubName} hub",
                        "did you open the {LockName} lock of {HubName} hub",
                        "have you closed the {LockName} lock in {HubName} hub",
                        "have you closed the {LockName} lock of {HubName} hub",
                        "have you opened the {LockName} lock in {HubName} hub",
                        "have you opened the {LockName} lock of {HubName} hub"
                    ]
                },
                {
                    "name": "FindLockIntent",
                    "slots": [
                        {
                            "name": "LockName",
                            "type": "LIST_OF_LOCKNAMES"
                        },
                        {
                            "name": "HubName",
                            "type": "LIST_OF_HUBNAMES"
                        }
                        ],
                    "samples": [
                        "where is {LockName} lock of {HubName} hub",
                        "where is {LockName} lock in {HubName} hub",
                        "where's {LockName} lock of {HubName} hub",
                        "where's {LockName} lock in {HubName} hub",
                        "signal {LockName} lock of {HubName} hub",
                        "signal {LockName} lock in {HubName} hub",
                        "signal {LockName} lock of {HubName} hub please",
                        "signal {LockName} lock in {HubName} hub please",
                        "please signal {LockName} lock of {HubName} hub",
                        "please signal {LockName} lock in {HubName} hub",
                        "find {LockName} lock of {HubName} hub",
                        "find {LockName} lock in {HubName} hub",
                        "please find {LockName} lock of {HubName} hub",
                        "please find {LockName} lock in {HubName} hub",
                        "find {LockName} lock of {HubName} hub please",
                        "find {LockName} lock in {HubName} hub please",
                        "beep {LockName} lock in {HubName} hub",
                        "beep {LockName} lock of {HubName} hub",
                        "please beep {LockName} lock in {HubName} hub",
                        "please beep {LockName} lock of {HubName} hub",
                        "beep {LockName} lock in {HubName} hub please",
                        "beep {LockName} lock of {HubName} hub please"
                    ]
                },
                {
                    "name": "EnterPINIntent",
                    "slots": [
                        {
                            "name": "PIN",
                            "type": "AMAZON.FOUR_DIGIT_NUMBER"
                        }
                        ],
                    "samples": [
                        "{PIN}",
                        "my pin is {PIN}",
                        "the pin is {PIN}",
                        "pin is {PIN}"
                    ]
                },
                {
                    "name": "ChangePINIntent",
                    "slots": [
                        {
                            "name": "PIN",
                            "type": "AMAZON.FOUR_DIGIT_NUMBER"
                        }
                        ],
                    "samples": [
                        "new pin is {PIN}",
                        "my new pin is {PIN}",
                        "the new pin is {PIN}",
                        "pin is {PIN}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "LIST_OF_COLORS",
                    "values": [
                        {
                            "name": {
                                "value": "white"
                            }
                        },
                        {
                            "name": {
                                "value": "black"
                            }
                        },
                        {
                            "name": {
                                "value": "yellow"
                            }
                        },
                        {
                            "name": {
                                "value": "silver"
                            }
                        },
                        {
                            "name": {
                                "value": "gold"
                            }
                        },
                        {
                            "name": {
                                "value": "orange"
                            }
                        },
                        {
                            "name": {
                                "value": "blue"
                            }
                        },
                        {
                            "name": {
                                "value": "red"
                            }
                        },
                        {
                            "name": {
                                "value": "green"
                            }
                        }
                    ]
                },
                {
                    "name": "LIST_OF_LOCKNAMES",
                    "values": [
                        {
                            "name": {
                                "value": "first"
                            }
                        },
                        {
                            "name": {
                                "value": "second"
                            }
                        },
                        {
                            "name": {
                                "value": "third"
                            }
                        },
                        {
                            "name": {
                                "value": "fourth"
                            }
                        },
                        {
                            "name": {
                                "value": "fifth"
                            }
                        },
                        {
                            "name": {
                                "value": "sixth"
                            }
                        },
                        {
                            "name": {
                                "value": "seventh"
                            }
                        },
                        {
                            "name": {
                                "value": "eighth"
                            }
                        },
                        {
                            "name": {
                                "value": "ninth"
                            }
                        }
                    ]
                },
                {
                    "name": "LIST_OF_HUBNAMES",
                    "values": [
                        {
                            "name": {
                                "value": "first"
                            }
                        },
                        {
                            "name": {
                                "value": "second"
                            }
                        },
                        {
                            "name": {
                                "value": "third"
                            }
                        },
                        {
                            "name": {
                                "value": "fourth"
                            }
                        },
                        {
                            "name": {
                                "value": "fifth"
                            }
                        },
                        {
                            "name": {
                                "value": "sixth"
                            }
                        },
                        {
                            "name": {
                                "value": "seventh"
                            }
                        },
                        {
                            "name": {
                                "value": "eighth"
                            }
                        },
                        {
                            "name": {
                                "value": "ninth"
                            }
                        }
                    ]
                }
            ]
        }
    }
}