Loaded Prisma config from prisma.config.ts.

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "reg";

-- CreateTable
CREATE TABLE "tb_account" (
    "account_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "username" VARCHAR(150),
    "account_status" VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    "last_login_at" TIMESTAMPTZ(6),
    "last_login_channel_id" BIGINT,
    "password" VARCHAR(255),
    "password_changed_at" TIMESTAMPTZ(6),
    "password_expired_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "created_by" UUID NOT NULL,
    "updated_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "pk_tb_account" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "tb_his_failed_login" (
    "failed_login_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "account_id" UUID NOT NULL,
    "channel_id" BIGINT,
    "login_method_id" BIGINT NOT NULL,
    "username_input" VARCHAR(150) NOT NULL,
    "ip_address" INET,
    "device_id" VARCHAR(100),
    "failure_reason" VARCHAR(80),
    "failed_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "failed_login_pkey" PRIMARY KEY ("failed_login_id")
);

-- CreateTable
CREATE TABLE "tb_legal_entity_represent" (
    "legal_represent_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "legal_code" VARCHAR(13) NOT NULL,
    "legal_name" VARCHAR(100),
    "user_legal_id" UUID,
    "remark_legal" TEXT,
    "effective_from" TIMESTAMPTZ(6),
    "effective_to" TIMESTAMPTZ(6),
    "status" VARCHAR(30) NOT NULL DEFAULT 'PENDING_APPROVAL',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "created_by" UUID,
    "updated_by" UUID,
    "record_status" VARCHAR(5) NOT NULL DEFAULT 'N',

    CONSTRAINT "tb_legal_entity_representative_pkey" PRIMARY KEY ("legal_represent_id")
);

-- CreateTable
CREATE TABLE "tb_log_access_session" (
    "session_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "account_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "login_method_id" BIGINT,
    "channel_id" BIGINT,
    "ip_address" INET,
    "device_id" VARCHAR(100),
    "kiosk_id" VARCHAR(100),
    "session_status" VARCHAR(30) NOT NULL DEFAULT 'ACTIVE',
    "started_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_activity_at" TIMESTAMPTZ(6),
    "expired_at" TIMESTAMPTZ(6),
    "ended_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "updated_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "access_session_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "tb_ms_channel" (
    "channel_id" BIGSERIAL NOT NULL,
    "channel_code" VARCHAR(30) NOT NULL,
    "channel_name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN,
    "display_order" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "tb_ms_channel_unique" PRIMARY KEY ("channel_id")
);

-- CreateTable
CREATE TABLE "tb_ms_method" (
    "method_id" BIGSERIAL NOT NULL,
    "method_code" VARCHAR(30) NOT NULL,
    "method_name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "display_order" INTEGER,
    "is_enable" BOOLEAN,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "tb_ms_method_unique" PRIMARY KEY ("method_id")
);

-- CreateTable
CREATE TABLE "tb_ms_role" (
    "role_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "role_code" VARCHAR(80) NOT NULL,
    "role_name" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "is_system_role" BOOLEAN NOT NULL DEFAULT false,
    "status" VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "created_by" VARCHAR,
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "tb_ms_user_type" (
    "user_type_id" BIGSERIAL NOT NULL,
    "user_type_code" VARCHAR(50) NOT NULL,
    "user_type_name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "default_role_code" VARCHAR(100),
    "registration_allowed" BOOLEAN NOT NULL DEFAULT true,
    "login_allowed" BOOLEAN NOT NULL DEFAULT true,
    "require_identity_verify" BOOLEAN NOT NULL DEFAULT true,
    "require_document" BOOLEAN NOT NULL DEFAULT false,
    "is_internal_user" BOOLEAN NOT NULL DEFAULT false,
    "record_status" VARCHAR DEFAULT 'N',
    "require_office_verify" BOOLEAN,
    "display_order" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "created_by" UUID,

    CONSTRAINT "tb_ms_user_type_unique" PRIMARY KEY ("user_type_id")
);

-- CreateTable
CREATE TABLE "tb_regist_attach" (
    "regist_doc_att_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "channel_id" BIGINT NOT NULL,
    "doc_name" VARCHAR(500) NOT NULL,
    "file_name" VARCHAR(500),
    "file_path" TEXT,
    "file_hash" VARCHAR(255),
    "mime_type" VARCHAR(100),
    "file_size" BIGINT,
    "upload_seq" INTEGER,
    "remark" TEXT,
    "uploaded_by" UUID,
    "uploaded_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "attatch_document_pkey" PRIMARY KEY ("regist_doc_att_id")
);

-- CreateTable
CREATE TABLE "tb_user" (
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_type_id" BIGINT NOT NULL,
    "register_channel_id" BIGINT,
    "person_id" VARCHAR(13),
    "title" VARCHAR(50),
    "given_name" VARCHAR(200),
    "middle_name" VARCHAR,
    "family_name" VARCHAR(200),
    "title_en" VARCHAR(20),
    "given_name_en" VARCHAR,
    "middle_name_en" VARCHAR(50),
    "family_name_en" VARCHAR(100),
    "birth_date" DATE,
    "date_of_expiry" DATE,
    "ial_level" VARCHAR(20),
    "legal_code" VARCHAR(13),
    "legal_name" VARCHAR(100),
    "land_office_id" VARCHAR(100),
    "land_office_name" VARCHAR(100),
    "land_office_position" VARCHAR(100),
    "private_office_id" VARCHAR(100),
    "private_office_name" VARCHAR(100),
    "email" VARCHAR(100),
    "is_email_verified" BOOLEAN,
    "mobile_no" VARCHAR(10),
    "verfity_at" TIMESTAMPTZ(6),
    "is_verify" BOOLEAN,
    "user_status" VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "created_by" UUID NOT NULL,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "tb_user_address" (
    "user_address_id" UUID,
    "user_id" UUID,
    "address_type" INTEGER,
    "home_no" VARCHAR(20),
    "moo" VARCHAR(10),
    "alley" VARCHAR(100),
    "soi" VARCHAR(100),
    "road" VARCHAR(100),
    "tambol_code" INTEGER,
    "tambol_name" VARCHAR(100),
    "amphur_code" INTEGER,
    "amphur_name" VARCHAR(100),
    "province_code" INTEGER,
    "province_name" VARCHAR(100),
    "remark" TEXT,
    "is_visible" BOOLEAN,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "created_by" UUID,
    "record_status" VARCHAR
);

-- CreateTable
CREATE TABLE "tb_user_consent" (
    "consent_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "channel_id" BIGINT,
    "consent_version" VARCHAR(50),
    "consent_description" TEXT,
    "is_accepted" BOOLEAN NOT NULL,
    "accepted_at" TIMESTAMPTZ(6),
    "withdrawn_at" TIMESTAMPTZ(6),
    "ip_address" INET,
    "device_id" VARCHAR(100),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "user_consent_pkey" PRIMARY KEY ("consent_id")
);

-- CreateTable
CREATE TABLE "tb_user_role" (
    "user_role_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "role_id" UUID,
    "request_group_code" VARCHAR(50) NOT NULL,
    "assigned_by" UUID,
    "assigned_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effective_from" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effective_to" TIMESTAMPTZ(6),
    "status" VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "record_status" VARCHAR DEFAULT 'N',

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_role_id")
);

-- CreateTable
CREATE TABLE "tb_user_verfity" (
    "user_verify_id" UUID,
    "user_id" UUID NOT NULL,
    "verify_flag" CHAR(1) DEFAULT '0',
    "verify_by" UUID,
    "verify_at" TIMESTAMPTZ(6),
    "verify_desc" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "update_by" UUID,
    "created_by" UUID NOT NULL,
    "record_status" VARCHAR DEFAULT 'N'
);

-- CreateIndex
CREATE INDEX "idx_tb_account_user_id" ON "tb_account"("user_id");

-- CreateIndex
CREATE INDEX "idx_tb_his_failed_login_account_id" ON "tb_his_failed_login"("account_id");

-- CreateIndex
CREATE INDEX "idx_tb_legal_entity_representative_user_id" ON "tb_legal_entity_represent"("user_id");

-- CreateIndex
CREATE INDEX "idx_tb_access_session_account_id" ON "tb_log_access_session"("account_id");

-- CreateIndex
CREATE INDEX "idx_tb_access_session_user_id" ON "tb_log_access_session"("user_id");

-- CreateIndex
CREATE INDEX "ix_access_session_account" ON "tb_log_access_session"("account_id");

-- CreateIndex
CREATE INDEX "ix_access_session_kiosk" ON "tb_log_access_session"("kiosk_id") WHERE (kiosk_id IS NOT NULL);

-- CreateIndex
CREATE INDEX "ix_access_session_status" ON "tb_log_access_session"("session_status");

-- CreateIndex
CREATE INDEX "ix_access_session_user" ON "tb_log_access_session"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "role_role_code_key" ON "tb_ms_role"("role_code");

-- CreateIndex
CREATE INDEX "idx_reg_document" ON "tb_regist_attach"("regist_doc_att_id");

-- CreateIndex
CREATE INDEX "idx_reg_document_uploaded_at" ON "tb_regist_attach"("uploaded_at");

-- CreateIndex
CREATE INDEX "idx_tb_reg_attachment_upload_source" ON "tb_regist_attach"("channel_id");

-- CreateIndex
CREATE INDEX "idx_tb_user_legal_entity_id" ON "tb_user"("legal_code");

-- CreateIndex
CREATE INDEX "idx_tb_user_user_type_code" ON "tb_user"("user_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_address_unique" ON "tb_user_address"("user_address_id");

-- CreateIndex
CREATE INDEX "idx_tb_user_consent_user_id" ON "tb_user_consent"("user_id");

-- CreateIndex
CREATE INDEX "idx_tb_user_role_role_id" ON "tb_user_role"("request_group_code");

-- CreateIndex
CREATE INDEX "idx_tb_user_role_user_id" ON "tb_user_role"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_id_role_id_effective_from_key" ON "tb_user_role"("user_id", "request_group_code", "effective_from");

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_verfity_unique" ON "tb_user_verfity"("user_verify_id", "user_id");

-- AddForeignKey
ALTER TABLE "tb_account" ADD CONSTRAINT "fk_tb_account_user" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_account" ADD CONSTRAINT "tb_account_tb_ms_channel_fk" FOREIGN KEY ("last_login_channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_his_failed_login" ADD CONSTRAINT "fk_tb_his_failed_login_account" FOREIGN KEY ("account_id") REFERENCES "tb_account"("account_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_his_failed_login" ADD CONSTRAINT "tb_his_failed_login_tb_ms_channel_fk" FOREIGN KEY ("channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_legal_entity_represent" ADD CONSTRAINT "fk_tb_legal_entity_representative_user" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_log_access_session" ADD CONSTRAINT "fk_tb_access_session_account" FOREIGN KEY ("account_id") REFERENCES "tb_account"("account_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_log_access_session" ADD CONSTRAINT "fk_tb_access_session_user" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_log_access_session" ADD CONSTRAINT "tb_log_access_session_tb_ms_channel_fk" FOREIGN KEY ("channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_log_access_session" ADD CONSTRAINT "tb_log_access_session_tb_ms_method_fk" FOREIGN KEY ("login_method_id") REFERENCES "tb_ms_method"("method_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_regist_attach" ADD CONSTRAINT "tb_regist_attach_tb_ms_channel_fk" FOREIGN KEY ("channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_regist_attach" ADD CONSTRAINT "user_document_application_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user" ADD CONSTRAINT "tb_user_tb_ms_channel_fk" FOREIGN KEY ("register_channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user" ADD CONSTRAINT "tb_user_tb_ms_user_type_fk" FOREIGN KEY ("user_type_id") REFERENCES "tb_ms_user_type"("user_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_address" ADD CONSTRAINT "tb_user_address_tb_user_fk" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_consent" ADD CONSTRAINT "fk_tb_user_consent_user" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_consent" ADD CONSTRAINT "tb_user_consent_tb_ms_channel_fk" FOREIGN KEY ("channel_id") REFERENCES "tb_ms_channel"("channel_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_role" ADD CONSTRAINT "fk_tb_user_role_assigned_by" FOREIGN KEY ("assigned_by") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_role" ADD CONSTRAINT "fk_tb_user_role_user" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_role" ADD CONSTRAINT "tb_user_role_tb_ms_role_fk" FOREIGN KEY ("role_id") REFERENCES "tb_ms_role"("role_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_user_verfity" ADD CONSTRAINT "tb_user_verfity_tb_user_fk" FOREIGN KEY ("user_id") REFERENCES "tb_user"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

