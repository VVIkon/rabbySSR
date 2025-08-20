import mongoose, { Document, Schema, Model } from "mongoose";

export interface IPersonData extends Document {
	id: string;
	lastName: string;
	firstName: string;
	fatherName: string;
	dateOfBirth: string;
	yearsOld: number;
	phone: string;
	login: string;
	password: string;
	email: string;
	gender: string;
	genderCode: string;
	pasportNum: string;
	pasportSerial: string;
	pasportNumber: number;
	pasportCode: string;
	pasportOtd: string;
	pasportDate: string;
	inn_fiz: string;
	inn_ur: string;
	snils: string;
	oms: number;
	ogrn: string;
	kpp: number;
	address: string;
	addressReg: string;
	country: string;
	region: string;
	city: string;
	street: string;
	house: number;
	apartment: number;
	bankBIK: number;
	bankCorr: string;
	bankINN: number;
	bankKPP: number;
	bankNum: string;
	bankClient: string;
	bankCard: string;
	bankDate: string;
	bankCVC: number;
	eduSpecialty: string;
	eduProgram: string;
	eduName: string;
	eduDocNum: string;
	eduRegNumber: string;
	eduYear: number;
	carBrand: string;
	carModel: string;
	carYear: number;
	carColor: string;
	carNumber: string;
	carVIN: string;
	carSTS: string;
	carSTSDate: string;
	carPTS: string;
	carPTSDate: string;
}

const userSchema = new Schema<IPersonData>({
	id: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	fatherName: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	yearsOld: {
		type: Number,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	login: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	gender: {
		type: String,
		required: true,
	},
	genderCode: {
		type: String,
		required: true,
	},
	pasportNum: {
		type: String,
		required: true,
	},
	pasportSerial: {
		type: String,
		required: true,
	},
	pasportNumber: {
		type: Number,
		required: true,
	},
	pasportCode: {
		type: String,
		required: true,
	},
	pasportOtd: {
		type: String,
		required: true,
	},
	pasportDate: {
		type: String,
		required: true,
	},
	inn_fiz: {
		type: String,
		required: true,
	},
	inn_ur: {
		type: String,
		required: true,
	},
	snils: {
		type: String,
		required: true,
	},
	oms: {
		type: Number,
		required: true,
	},
	ogrn: {
		type: String,
		required: true,
	},
	kpp: {
		type: Number,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	addressReg: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	region: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	street: {
		type: String,
		required: true,
	},
	house: {
		type: Number,
		required: true,
	},
	apartment: {
		type: Number,
		required: true,
	},
	bankBIK: {
		type: Number,
		required: true,
	},
	bankCorr: {
		type: String,
		required: true,
	},
	bankINN: {
		type: Number,
		required: true,
	},
	bankKPP: {
		type: Number,
		required: true,
	},
	bankNum: {
		type: String,
		required: true,
	},
	bankClient: {
		type: String,
		required: true,
	},
	bankCard: {
		type: String,
		required: true,
	},
	bankDate: {
		type: String,
		required: true,
	},
	bankCVC: {
		type: Number,
		required: true,
	},
	eduSpecialty: {
		type: String,
		required: true,
	},
	eduProgram: {
		type: String,
		required: true,
	},
	eduName: {
		type: String,
		required: true,
	},
	eduDocNum: {
		type: String,
		required: true,
	},
	eduRegNumber: {
		type: String,
		required: true,
	},
	eduYear: {
		type: Number,
		required: true,
	},
	carBrand: {
		type: String,
		required: true,
	},
	carModel: {
		type: String,
		required: true,
	},
	carYear: {
		type: Number,
		required: true,
	},
	carColor: {
		type: String,
		required: true,
	},
	carNumber: {
		type: String,
		required: true,
	},
	carVIN: {
		type: String,
		required: true,
	},
	carSTS: {
		type: String,
		required: true,
	},
	carSTSDate: {
		type: String,
		required: true,
	},
	carPTS: {
		type: String,
		required: true,
	},
	carPTSDate: {
		type: String,
		required: true,
	},
});

const IPersonData: Model<IPersonData> =
	mongoose.models.User ||
	mongoose.model<IPersonData>("PersonData", userSchema);

export default IPersonData;
