import { types } from "mobx-state-tree";

export const Settings = types
  .model({
    quirkAPIKey: "",
    lifxAPIKey: "",
    dmxAddress: "",
    obsComputerName: "",
    autoStart: true,
  })
  .actions((self) => ({
    setQuirkAPIKey(value: string) {
      self.quirkAPIKey = value;
    },
    setLifxAPIKey(value: string) {
      self.lifxAPIKey = value;
    },
    setDMXAddress(address: string) {
      self.dmxAddress = address;
    },
    setOBSComputerName(name: string) {
      self.obsComputerName = name;
    },
    toggleAutoStart() {
      self.autoStart = !self.autoStart;
    }
  }))
  .views((self) => ({
    computerNames() {
      return self.obsComputerName.split(",").map((name) => name.trim());
    },
  }));
