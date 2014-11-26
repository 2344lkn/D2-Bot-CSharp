// Necromancer config file

/* 
 * Written by Nazban aka 2344lkn
 * Good: Config.SomeVar = true;
 * Bad: Config.SomeVar = True;
 */

function LoadConfig() {

	// User addon script.
	Scripts.UserAddon = false;

	Scripts.BattleOrders = false;
		Config.BattleOrders.Mode = 0;
		Config.BattleOrders.Wait = false;
		Config.BattleOrders.Getters = [];

	Config.MFLeader = false;


	/* ### Boss and Area scripts ### */
	// *** Act 1 ***
	Scripts.Corpsefire = false;
		Config.Corpsefire.ClearDen = false;
	Scripts.Mausoleum = false;
		Config.Mausoleum.KillBloodRaven = false;
		Config.Mausoleum.ClearCrypt = false;
	Scripts.Rakanishu = false;
		Config.Rakanishu.KillGriswold = true;
	Scripts.UndergroundPassage = false;
	Scripts.Coldcrow = false;
	Scripts.Tristram = false;
		Config.Tristram.PortalLeech = false;
	Scripts.Pit = false;
		Config.Pit.ClearPit1 = true;
	Scripts.Treehead = false;
	Scripts.Smith = false;
	Scripts.BoneAsh = false;
	Scripts.Countess = false;
		Config.Countess.KillGhosts = false;
	Scripts.Andariel = false;
	Scripts.Cows = false;

	// *** Act 2 ***
	Scripts.Radament = false;
	Scripts.Coldworm = false;
		Config.Coldworm.KillBeetleburst = false;
		Config.Coldworm.ClearMaggotLair = false;
	Scripts.AncientTunnels = false;
		Config.AncientTunnels.OpenChest = false;
		Config.AncientTunnels.KillDarkElder = false;
	Scripts.Summoner = false;
		Config.Summoner.FireEye = false;
	Scripts.Tombs = false;
	Scripts.Duriel = false;

	// *** Act 3 ***
	Scripts.Stormtree = false;
	Scripts.KurastTemples = false;
	Scripts.Icehawk = false;
	Scripts.Endugu = false;
	Scripts.Travincal = false;
		Config.Travincal.PortalLeech = false;
	Scripts.Mephisto = false;
		Config.Mephisto.MoatTrick = false;
		Config.Mephisto.KillCouncil = false;
		Config.Mephisto.TakeRedPortal = true;

	// *** Act 4 ***
	Scripts.OuterSteppes = false;
	Scripts.Izual = false;
	Scripts.Hephasto = false;
	Scripts.Vizier = false;
	Scripts.FastDiablo = false;
	Scripts.Diablo = false;
		Config.Diablo.Entrance = true; // Start from entrance
		Config.Diablo.SealWarning = "Leave the seals alone!";
		Config.Diablo.EntranceTP = "Entrance TP up";
		Config.Diablo.StarTP = "Star TP up";
		Config.Diablo.DiabloMsg = "Diablo";

	// *** Act 5 ***
	Scripts.Pindleskin = false;
		Config.Pindleskin.UseWaypoint = false;
		Config.Pindleskin.KillNihlathak = true;
		Config.Pindleskin.ViperQuit = false;
	Scripts.Nihlathak = false;
		Config.Nihlathak.ViperQuit = false;
	Scripts.Eldritch = false;
		Config.Eldritch.OpenChest = true;
		Config.Eldritch.KillShenk = true;
		Config.Eldritch.KillDacFarren = true;
	Scripts.Eyeback = false;
	Scripts.SharpTooth = false;
	Scripts.ThreshSocket = false;
	Scripts.Abaddon = false;
	Scripts.Frozenstein = false;
		Config.Frozenstein.ClearFrozenRiver = true;
	Scripts.Bonesaw = false;
		Config.Bonesaw.ClearDrifterCavern = false;
	Scripts.Snapchip = false;
		Config.Snapchip.ClearIcyCellar = true;
	Scripts.Worldstone = false;
	Scripts.Baal = false;
		Config.Baal.HotTPMessage = "Hot TP!";
		Config.Baal.SafeTPMessage = "Safe TP!";
		Config.Baal.BaalMessage = "Baal!";
		Config.Baal.SoulQuit = false;
		Config.Baal.DollQuit = false;
		Config.Baal.KillBaal = true;


	/* ### Leeching Section ### */
	Config.Leader = "";
	Config.QuitList = [""];

	Scripts.TristramLeech = false;
	Scripts.TravincalLeech = false;
		Config.TravincalLeech.Helper = true;
	Scripts.MFHelper = false;
	Scripts.Wakka = false;
	Scripts.DiabloHelper = false;
		Config.DiabloHelper.Wait = 120;
		Config.DiabloHelper.Entrance = true;
	Scripts.AutoBaal = false;
		Config.AutoBaal.FindShrine = false;
		Config.AutoBaal.LeechSpot = [15115, 5050];
		Config.AutoBaal.LongRangeSupport = false;
	Scripts.BaalHelper = false;
		Config.BaalHelper.Wait = 120;
		Config.BaalHelper.KillNihlathak = false;
		Config.BaalHelper.FastChaos = false;
		Config.BaalHelper.DollQuit = false;
		Config.BaalHelper.KillBaal = true;
		Config.BaalHelper.SkipTP = false;
	Scripts.Follower = true;

	// *** special scripts ***
	Scripts.WPGetter = false;
	Scripts.GetKeys = false;
	Scripts.OrgTorch = false;
		Config.OrgTorch.MakeTorch = true;s
		Config.OrgTorch.WaitForKeys = true;
		Config.OrgTorch.WaitTimeout = 15;
		Config.OrgTorch.UseSalvation = true;
		Config.OrgTorch.GetFade = false;
	Scripts.Rusher = false;
		Config.Rusher.WaitPlayerCount = 0;
	Scripts.Rushee = false;
		Config.Rushee.Quester = false;
		Config.Rushee.Bumper = false;
	Scripts.CrushTele = false;
	Scripts.Questing = false;
	Scripts.Gamble = false;
	Scripts.GhostBusters = false;
	Scripts.Enchant = false;
		Config.Enchant.Triggers = ["chant", "cows", "wps"];
		Config.Enchant.GetLeg = false;
		Config.Enchant.AutoChant = false;
		Config.Enchant.GameLength = 20;
	Scripts.IPHunter = false;
		Config.IPHunter.IPList = [];
		Config.IPHunter.GameLength = 3;
	Scripts.KillDclone = false;
	Scripts.ShopBot = false;
		Config.ShopBot.ShopNPC = "Anya";
		// TODO: Scan lib stuff here
		Config.ShopBot.ScanIDs = [187, 188, 194, 195, 326, 327, 338, 373, 397, 443, 449];
	Scripts.ChestMania = false; 
		Config.ChestMania.Act1 = [13, 14, 15, 16, 18, 19];
		Config.ChestMania.Act2 = [55, 59, 65, 66, 67, 68, 69, 70, 71, 72];
		Config.ChestMania.Act3 = [79, 80, 81, 92, 93, 84, 85, 90];
		Config.ChestMania.Act4 = [];
		Config.ChestMania.Act5 = [115, 116, 119, 125, 126, 127];
	Scripts.ClearAnyArea = false;
		Config.ClearAnyArea.AreaList = [];

	Config.Inventory[0] = [0,0,1,1,1,1,1,1,1,1];
	Config.Inventory[1] = [0,0,1,1,1,1,1,1,1,1];
	Config.Inventory[2] = [0,0,1,1,1,1,1,1,1,1];
	Config.Inventory[3] = [0,0,1,1,1,1,1,1,1,1];

	Config.StashGold = 100000;

	Config.BeltColumn[0] = "hp";
	Config.BeltColumn[1] = "mp";
	Config.BeltColumn[2] = "mp";
	Config.BeltColumn[3] = "mp";

	Config.MinColumn[0] = 1;
	Config.MinColumn[1] = 1;
	Config.MinColumn[2] = 0;
	Config.MinColumn[3] = 0;

	Config.PickitFiles.push("naz.nip");
	Config.PickitFiles.push("reset.nip");
	Config.PickRange = 40;
	Config.FastPick = false;

	Config.Gamble = false;
	Config.GambleGoldStart = 1000000;
	Config.GambleGoldStop = 500000;

	Config.GambleItems.push(520); // Amulet
	Config.GambleItems.push(522); // Ring
	Config.GambleItems.push(418); // Circlet
	Config.GambleItems.push(419); // Coronet

	Config.Cubing = false;

	// Ingredients for auto-picked recipes

	//Config.Recipes.push([Recipe.Gem, 560]); // perfect amethyst
	//Config.Recipes.push([Recipe.Gem, 565]); // perfect topaz
	//Config.Recipes.push([Recipe.Gem, 570]); // perfect sapphire
	//Config.Recipes.push([Recipe.Gem, 575]); // perfect emerald
	//Config.Recipes.push([Recipe.Gem, 580]); // perfect ruby
	//Config.Recipes.push([Recipe.Gem, 585]); // perfect diamond
	//Config.Recipes.push([Recipe.Gem, 600]); // perfect skull

	//Config.Recipes.push([Recipe.Token]); // token of absolution
	
	//Config.Recipes.push([Recipe.Rune, 630]); // pul -> um
	//Config.Recipes.push([Recipe.Rune, 631]); // um -> mal
	//Config.Recipes.push([Recipe.Rune, 632]); // mal -> ist
	//Config.Recipes.push([Recipe.Rune, 633]); // ist -> gul
	//Config.Recipes.push([Recipe.Rune, 634]); // gul -> vex

	//Config.Recipes.push([Recipe.Caster.Amulet]); // Craft Caster Amulet
	//Config.Recipes.push([Recipe.Blood.Ring]); // Craft Blood Ring
	//Config.Recipes.push([Recipe.Blood.Helm, 424]); // Craft Blood Armet
	//Config.Recipes.push([Recipe.HitPower.Gloves, 452]); // Craft Hit Power Vambraces

	Config.MakeRunewords = false;

	Config.PublicMode = 2;

	// TODO: Social things (Greets, Messages Etc)

	Config.ScanShrines = [];

	// TODO: Fastmod (FCR, FHR, FBR, IAS) Implement PacketCasting

	Config.AttackSkill[0] = -1; // Preattack skill.
	Config.AttackSkill[1] = 3; 	// Primary skill to bosses.
	Config.AttackSkill[2] = -1; // Primary untimed skill to bosses. Keep at -1 if Config.AttackSkill[1] is untimed skill.
	Config.AttackSkill[3] = 3; 	// Primary skill to others.
	Config.AttackSkill[4] = -1; // Primary untimed skill to others. Keep at -1 if Config.AttackSkill[3] is untimed skill.
	Config.AttackSkill[5] = -1; // Secondary skill if monster is immune to primary.
	Config.AttackSkill[6] = -1; // Secondary untimed skill if monster is immune to primary untimed.

	// Low mana skills - these will be used if main skills can't be cast.
	Config.LowManaSkill[0] = -1; // Timed low mana skill.
	Config.LowManaSkill[1] = -1; // Untimed low mana skill.

	// Class Specific Section
	Config.Curse[0] = 0;
	Config.Curse[1] = 0;

	Config.ExplodeCorpses = 0;
	Config.Golem = 0;		// 0 - dob't summon, "Clay", "Blood", "Iron", "Fire"
	Config.Skeletons = 0; 	// "max" to auto detect, set to 0 to disable
	Config.SkeletonMages = 0;
	Config.Revives = 0;
	Config.PoisonNovaDelay = 2;
	Config.ActiveSummon = false; // Raise dead between each attack. If false, will only raise after clear
	Config.ReviveUnstackable = true;
	Config.IronGolemChicken = 30;

	Config.Verbose = true;
	Config.DebugMode = true;
}
