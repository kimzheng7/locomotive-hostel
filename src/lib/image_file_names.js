// This file maps hotel and room slugs to their image filenames by category.
// Example structure:
// {
//   [hotelSlug]: {
//     [roomSlug]: {
//       [category]: [array of filenames]
//     }
//   }
// }

export const imageFileNames = {
	'budapest-apartments': {
		'terrace-apartment': {
			bathroom: ["82f61f75-2fba-4867-b920-392ce08ea0de.webp", "d0a93dbe-c699-4d2f-812d-b320664c75bb.webp"],
			bedroom: ["37fcdf6e-4b40-462d-aa2c-deb1e138d098.avif", "3ae6f508_original.avif", "448a9c9c-78cf-440b-9e8e-ed27605201f9.avif", "46f05e2e_original.avif", "69fea700-d6d6-41f7-a823-d0c0ca927b96.avif", "bcbb0626-9fc6-4bf5-829a-8d07df8a1c82.avif"],
			exterior: ["007aee80-37bb-4c40-a9c3-01087cf2dd4d.jpeg", "0266a690_original.avif", "0800c3b1-c05b-4779-9a03-0010013dd757.avif", "12c0bc29-ee21-4d2d-8a02-a1601617aa7b.avif", "1609149c-0535-43be-8103-d9f4814bd354.avif", "20814111-78bd-4bbc-b0f2-72724f530dd5.jpeg", "2b5f6528-a5fc-400f-bd8a-4e85a52f51e6.jpeg", "318a5303-27ed-45d4-b149-bbfb0ce00928.jpeg", "4dfdbd2c-ef14-4c3c-8734-d45b590b8c9b.avif", "59b886f0-877e-4f93-af7e-20524a0d4045.jpeg", "5c6e1708-bf9c-4298-bc95-84bfd5bb6547.jpeg", "619dbbf1-96f4-427b-96ce-f702b2c97319.avif", "67d12ea4-ccac-4db9-8701-f1e52023bb5f.jpeg", "748fcdc3-5261-41d6-90d3-5684b8efe07f.avif", "91d49a66_original.avif", "985f25a1-0bf3-4216-b4c5-08968544d035.jpeg", "aac883f8-c843-4b5a-a30b-4381b11382d0.avif", "b7e73e0f-4f32-43a7-8cb1-83f7d0261828.avif", "ca2a351d_original.avif", "cfe7315e-c579-4f7f-b737-2c4f3fd1c15d.avif", "d63b9126-d62f-472b-b441-91bd4c6c975b.avif", "dab57ba9-f2b0-42c7-964d-efff9e0d4528.avif", "e65afdc1-fa51-4889-ba3c-304fc96ad176.avif"],
			kitchen: ["02227af1-eac1-4331-9f90-783f779c0a81.avif", "8ade754c-9aed-444d-9dbe-e40edc759867.avif", "8f2fe679-472b-4a29-be53-ce173824d8fd.avif", "979d669f-556f-4c6c-b8d3-a969b44e72fe.jpeg"],
			'living-room': ["ce8f5702-ac72-43d4-ac7a-1ffe35beac5e.avif"],
			view: ["14b8fa05-bc43-41e2-b969-ce6eef98f453.jpeg", "29e07d43-1d88-4d97-8902-cc27369fd812.jpeg", "2d1852ea-2e99-487f-842f-630c563ff0a8.avif", "4e84f40a-1e2d-4758-a725-bcd5068ad14c.avif", "81d39a70-e982-4a9a-b50a-8d26750faaea.jpeg", "b0af600e-1c6a-44ea-9327-bf2974715e34.avif", "d9a339f3-510a-49ba-9c45-f15bccc369d0.jpeg", "fd5a1674-1913-4229-9e94-a2d7d269ac2a.jpeg"]
		},
		'gentry-condo': {
			bathroom: ["06181380-ea93-480a-9b07-2679609f5834.jpeg"],
			bedroom: ["023f5cf3-1844-40d0-bb28-57144fb487c2.avif", "238969af-2b6c-454f-937c-da4bf1c04ad1.jpeg", "8c0b6f2f-256d-4574-a574-2a2182b409c5.avif", "95ceea86-d087-404d-adc1-0b82f8592f89.jpeg", "96943604-4025-46de-9563-01d69796ad6d.jpeg"],
			exterior: ["0903d183-a5bb-4786-83e6-d87240001c9b.avif", "1bda7f7f-cffd-4a1b-bde3-3475795a9e88.avif", "2a44bfb9-62a8-4903-8fe1-04b05649a110.avif", "30a45db4-1066-4091-b989-cbf1ceb58b75.avif", "4d0dad30-ee56-4097-81ec-a2df2ced374c.jpeg", "6cfa4242-4667-4c2b-9b86-d4594159c869.jpeg", "802b1151-c4f5-4fdb-bd32-e2fe9d0ec796.jpeg", "b840e19b-34a8-4064-b3ee-62f9cae2bb66.avif", "bb4b38a6-f843-426f-bc49-9758d2dc00d5.jpeg", "bef9971a-8371-43ba-a807-aececa0c56ab.avif", "c9e4c91c-9f92-4b74-a99f-fec7410c674a.avif"],
			kitchen: ["0d12b7d7-8eee-4f78-ae4c-280d034f3262.jpeg", "135de362-7801-43f1-81c0-f4033c7d7dfc.jpeg", "9cc8aedd-d664-4517-b664-42b116a77c61.jpeg"],
			'living-room': ["cd69c891-bea9-4d3d-9ea6-7501ee348012.avif"],
			view: ["60827382-906a-4eac-be64-def30f8dc371.avif", "7cc1067a-42fa-44cf-a239-aea4e5a66b91.jpeg", "9f852178-8a6f-4a8e-89d8-6578cfce72a4.jpeg"]
		},
		'nest-apartment': {
			bathroom: ["3ae282cf-690f-45ed-b1f7-199042114454.avif", "c966002a-9444-44ac-96be-4e48a61915a7.jpeg", "d913bed2-4313-4bcb-879b-8161cb2dd552.avif"],
			bedroom: ["1eea7c46-d8df-43a9-9256-808f420f8618.avif", "7eef0ee4-fe64-4d5e-b9d8-894f0c31b7a8.avif", "8cbcb191-f64e-4f15-9d71-917a8a85849c.webp", "9c8c842a-30d0-494a-9394-2be20a1a4891.webp", "b7bb6338-79fe-40c6-a265-b66d7127213d.avif", "bb060ae6-88bc-4ca9-a0d3-f9ea561e8cf7.jpeg", "cbf55ce0-f2b3-4a82-b9ee-41914ecf1aac.avif", "eb4abb26-7a6f-4fb0-92c6-f820cb5c0116.webp", "ecc829e9-c095-4479-8f9e-092f6bafb37a.jpeg"],
			exterior: ["021a8f82-5e2c-47af-91ba-40c276beb2d5.avif", "042f8f32-5b0d-45af-8ca0-a186c3a54bb6.avif", "24634ddb-e15f-4b82-a5d6-d188585c9fb2.avif", "24a71f63-909b-4c77-aca0-b071615dc3af.avif", "30f6f950-7bff-417f-a525-6e4decc290cf.avif", "40976966-033b-4650-9501-6373e8dc64e8.avif", "42b8335c-cf8f-45ab-8791-765fc4eb066b.jpeg", "483a6bfd-a6d2-4101-83d5-ecb0553f1b46.avif", "489fc748-c99c-497d-8ae9-f148d755ed06.avif", "4a48f2e0-ddcc-4a92-bf7c-61fbc2b08e18.avif", "4af35a00-1383-40dd-a14f-00da45df830d.avif", "57071648-d509-414b-a78e-9b0401fb0b00.jpeg", "57471d16-ce78-40e1-a507-4145c5af09f5.jpeg", "5da50fcb-fc62-40dd-ac25-c7bedbd5ad09.jpeg", "65aac793-afad-4bd4-990e-52f4e119f809.avif", "6deb6349-6ef5-4341-8740-6972e09a463a.avif", "772a1f6d-d2a9-4f28-b9ee-9cf3dbdfc20e.jpeg", "7a9ba1d8-7da9-410a-8a54-df0462916b5d.avif", "7b28e3ae-edf4-4b9a-bca4-c40e372180d1.avif", "8128f8d8-8570-4edf-8176-47f75248e2a7.avif", "819d3ac0-5570-4247-ab77-e9ca51996cf9.avif", "827dbd85-b4b7-4f85-8a8e-61490ca6470b.avif", "8d2d52c1-c323-4656-9fd3-896eeea612cf.jpeg", "94ef6621-219a-487f-a886-41729f1b6965.avif", "98ce144f-9097-4f22-8a9a-1f1064bc8bc6.jpeg", "a2bf8b7f-2161-4e8a-a8a6-4ba69d65c04d.avif", "a2e3d1b0-5cc4-4000-aeed-b1c67c6ce8d7.avif", "a4677496-f78a-4129-963d-d67667e2a896.jpeg", "cca53c99-8766-49e5-adcc-bdfb267f0049.avif", "d26ad656-0e5f-4252-8fad-cf9c96b6c755.jpeg", "d2919981-db62-44a1-826a-378557ae59c6.avif", "d517c1f0-416b-41bd-abed-42f44fcc15ee.avif", "d66b6feb-4475-411b-bbae-5af91d5698f5.avif", "da152203-2c90-430a-bc40-c62048e279a2.avif", "ea101b7a-dc97-452d-b779-d8af632a9028.avif", "ecb8d124-9d86-4d7b-bbde-135126f6240c.avif", "ed5b8b35-0fe5-4622-a8e7-cafceca377e4.avif", "f0c7cde4-ca22-42de-83c7-a5f07021c55d.avif", "f4977470-7c21-4331-a487-14952546a933.avif"],
			kitchen: ["3df7cfab-2ea1-47dc-a4f3-4b1e136aa0b5.avif", "6ac0d26e-917b-4c3d-af8a-33587a70fc68.avif", "9c814969-8420-48df-9759-3c709e53168e.avif", "ca32c32a-a263-480f-9407-a2301a886432.avif"],
			'living-room': ["096a4f40-88d8-46a6-a826-2c9ad39a28e2.avif", "27b11548-f11c-496e-bf2e-47e418e99bc2.avif", "2db120aa-69c1-4f03-93c2-78a6f7a81fbf.avif", "31194d6e-87fd-4ae1-beb3-2539d59456e5.avif", "5a21699e-9934-4563-bfdc-3fd25aab7d20.avif", "696b04d8-ce3e-47f2-a01c-4699f024de50.avif", "98330cb1-f0e9-48ea-9e9e-defd24358a79.avif", "f0326d86-931d-43d9-85a5-da18a5e0ff1c.avif"],
			view: []
		},
		'buda-castle-apartment': {
			bathroom: [],
			bedroom: ["IMG_20220220_151605.jpg", "IMG_20220220_151655.jpg", "IMG_20220220_151756.jpg", "IMG_20220220_152159.jpg", "IMG_20220220_152242.jpg", "IMG_20220220_152444.jpg", "IMG_20220220_153221.jpg", "IMG_20220220_153353.jpg"],
			exterior: [],
			kitchen: [],
			'living-room': ["IMG_20220220_151929.jpg", "IMG_20220220_152043.jpg", "IMG_20220220_152112.jpg", "IMG_20220220_152619.jpg", "IMG_20220220_152658.jpg", "IMG_20220220_153048.jpg"],
			view: []
		}
	},
	'balaton-stays': {
		'farm-stay': {
			bathroom: ["32bae13c_original.jpg"],
			bedroom: ["e17c7360-b845-4052-836d-6a15feb41624.jpeg"],
			exterior: ["0154432c-470e-42ed-949f-fff9dfac0291.jpeg", "07d9dd06_original.jpg", "0c15f66f-d9de-4a54-b736-222100f7a79a.jpeg", "0d370814-02cb-4ff1-b1e2-7859862b87a3.jpeg", "160825c8_original.jpg", "19b78606-f3f0-4fd5-89f7-6f63c39073b4.jpeg", "2701adb3_original.jpg", "2a642672-214b-4fe1-b750-5fe82f41a28c.jpeg", "375cde95-8d1a-4195-bde8-607d0ff9e7af.jpeg", "49eb2bb6-4500-4f1a-bd5a-adc5fe0f00d8.jpeg", "5090e610-086b-4783-a37f-a0262b021674.jpeg", "520e182f_original.jpg", "5f3543b9-b56f-47bb-b47c-f7e7de8f0d12.jpeg", "5fb72129_original.jpg", "630d9f94-67e8-405b-8dc5-1799e3ef9b4d.jpeg", "66a5f86d-c89b-4260-8b2e-7359fee3ba54.jpeg", "6c49e789-5608-4908-8864-a08a99a12912.jpeg", "6d9f3b11-fd68-4f43-a794-1c7b0f6a6f58.jpeg", "6ecd504c-2fe9-4ed0-ae42-bc97ad14646f.jpeg", "75c1c68a-accb-4b62-938a-c62396fdd273.jpeg", "76bb81d2-edc0-443f-9f0c-4ef759393ca8.jpeg", "791b5e45-3e70-460e-84c7-0ca3164679ad.jpeg", "7d7dc373-c5db-4e05-845e-42f0c1486aa0.jpeg", "8b2179ad-b9f0-4769-8ecd-14270739884f.jpeg", "8d185fbe_original.jpg", "8e428b2e-1f69-46d7-89ce-12799fde969e.jpeg", "8eae7014-c8ec-42bf-9f77-13f7a51698b7.jpeg", "8f4efc6a_original.jpg", "8f55cc03-f50a-457d-b931-6fb2d915d005.jpeg", "924017ea-9516-4ff1-8486-49f420bddeae.avif", "aab88ffc_original.jpg", "af32b0a2-7213-4698-aea8-f8cd39bd19e8.jpeg", "b4cc7ae0_original.jpg", "b9b91301_original.jpg", "c9cfcdae-2c8b-42fd-be1e-16e895f4f2d4.jpeg", "ca55fe23-a2e6-458b-bc5b-8be8d12f7b13.jpeg", "cdad1821-d3ea-471e-bf1a-227fec8c7424.avif", "cdbe9329-2b43-493a-8c12-08a1bed7d2f9.jpeg", "cea1ade5-a0c3-443c-aa7e-1134d1225296.jpeg", "d696e17d-7b70-4c58-a1a4-abbd76d50001.jpeg", "e7e50c8d-99cc-4627-b49b-a069aed32e9c.jpeg", "fb89e834-c0a2-4fba-894d-cc39714fd149.jpeg"],
			kitchen: ["091fc8c8-d5a8-40bb-bd04-a0e808d42af5.jpeg"],
			'living-room': ["232cad3c-fb6a-4159-99d5-b2214f8c54b4.jpeg", "3b9b1486-47fb-4399-8918-e37ab208593f.jpeg", "8945f4c3-94a9-4a75-ae55-d98fe2bf9925.jpeg"],
			view: ["89f1990b-ff65-4927-b67b-7e2957118981.jpeg"]
		},
		'rental-unit': {
			bathroom: ["baab2711-2f7b-48ce-a549-ea9162bd8a74.avif", "d1630395-a48a-480a-bec6-547af962ddf0.jpg"],
			bedroom: ["0152d5e3-f1f6-46d3-8eae-597035855ce5.avif", "223b3414-6f18-41d2-90d2-8236b917ce9b.jpeg", "28acf284-8895-4ced-b8ec-8050bd29b5ce.jpeg", "3f1d4191-c85c-432d-987b-334e9f6a1f2f.jpeg", "d3e1b60a-2ea6-49fa-906a-51b8b0feecc5.jpeg"],
			exterior: ["03ce5c69-8362-491a-b772-613022fa863b.jpg", "0bb17c2a-48be-452e-9515-b0b212ab71fa.jpeg", "154986c7-d1a7-42e7-95b6-694988b91960.jpg", "1cded362-dc93-45a1-8383-b79a141f8d90.jpeg", "31364d29-7048-485d-8efe-28cb826704af.jpeg", "31ba25b0-cf0e-4d9b-9f49-187d702fe80e.jpg", "33822df7-5c4d-4e00-8caf-280c46e80743.jpeg", "387b2b23-5b2a-41cb-aa47-bd8fdb383c8e.jpeg", "4b2cee7e-ec64-48a3-b432-0d423f9e9b8e.jpeg", "4e71330c-e9b6-4200-ba0b-719857fd5635.jpg", "4f4e8eb9-d134-460c-99c3-15537047f821.jpeg", "53f68f4a-4dd1-495f-b88d-2c896c382d39.jpeg", "55431c96-c589-4354-9028-ea7c3f7f1f8a.jpeg", "5e364760-7e6c-44b0-9e9a-bd6c2e6f8441.jpg", "609d4723-f501-44f6-aa70-f029e87bf433.jpeg", "74898a47-676a-40ce-9702-54def3a49d93.jpeg", "88e4de61-b7b3-420f-a938-74838514ce2d.jpg", "9297fbc6-10e3-4a95-b67e-77de0a08247a.jpg", "a7b0343e-01f7-4f88-855c-9924863f7001.jpeg", "b176ce3e-35f2-4944-820b-97f058128035.jpg", "b22c07df-12cf-4342-8f05-75d772a4abf8.jpeg", "b4496cc4-63cb-4652-ba63-ca9e0d1d3a45.jpeg", "c85f9fad-277f-442a-a242-bf986fac8407.jpg", "d209d7d5-fb7c-4a2c-a2a5-93c7581df3ff.jpeg", "d723f85f-4068-458f-a2d2-2ae90003cb26.jpg", "ec9c05c5-2d4d-4a69-8921-2bb41d1e8bab.jpg", "f37eee48-93be-4cbe-bd98-e1be9b1af8e9.avif"],
			kitchen: ["71d9977f-df58-4ca4-93eb-314dbb6c3a21.jpg", "a17d9374-a10d-438d-a59c-526a6c4f736c.jpeg"],
			'living-room': ["19b3fb31-c434-48ca-b89b-d9947c24fcff.jpeg", "2e466d2e-6dfe-4f55-9fc1-294b8e641295.avif", "8f8fceb6-b1c6-4bc4-b5f2-ca7f28b492c2.avif", "e86a99a8-64b0-4c91-94c5-355caf5b5353.avif"],
			view: ["326c2a93-296b-4088-af54-817578366bfd.avif", "4a676032-4583-48ca-94c3-175d89024b64.jpeg"]
		}
	},
	'locomotive-intercity': {
		'hostel-dorm-m': {
			bathroom: [],
			bedroom: ["82733665-66c0-4235-9a87-f04135fb2d56.avif", "88e76a45-8467-4355-b413-860e0beddf12.avif", "912717fa-2e09-436f-87db-bf80d1e3266d.avif"],
			exterior: ["9643bc4d-96d9-45cb-8813-196539e9ff14.avif"],
			kitchen: [],
			'living-room': [],
			view: ["739e7eed-2a6c-43de-ba8f-0339cadb79a6.avif"]
		},
		'private-room': {
			bathroom: ["27df632f-8de9-4be1-b61c-e5df7ee0a3d2.avif", "a80f8a26-2292-4e68-9800-f9ea3f9c2a58.avif", "e042c031_original.avif"],
			bedroom: ["0ba83f81-f9c2-43cf-9e77-98d1803df10b.avif", "1bc62923_original.avif", "df27fd50_original.avif"],
			exterior: ["6f01d974_original.avif"],
			kitchen: ["751608b5-9379-46b0-967a-22cdb9d24668.avif"],
			'living-room': ["67d4b9b9-4a21-49d8-8769-1c0331e08c89.avif", "2625465e_original.avif", "cddbe20a-5f6f-4850-83ca-fa53e1f6d005.avif"],
			view: []
		}
	}
};

export default imageFileNames;
